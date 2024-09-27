from django.shortcuts import render
import os
import csv
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from app_smart.models import Sensor

class UploadSensorsView(APIView):
    def get(self, request):
        # Renderiza a página de upload
        return render(request, 'app_smart/index.html', {'message': ''})

    def post(self, request):
        file = request.FILES.get('file')
        if not file:
            return Response('Nenhum arquivo enviado.', status=status.HTTP_400_BAD_REQUEST)

        if not file.name.endswith('.csv'):
            return Response('Formato de arquivo não suportado. Por favor, envie um arquivo CSV.', status=status.HTTP_400_BAD_REQUEST)

        try:
            # Salva o arquivo temporariamente
            file_path = os.path.join('/tmp', file.name)
            with open(file_path, 'wb+') as destination:
                for chunk in file.chunks():
                    destination.write(chunk)

            # Processa o arquivo CSV
            with open(file_path, newline='', encoding='ISO-8859-1') as csvfile:
                reader = csv.DictReader(csvfile)
                for row in reader:
                    Sensor.objects.create(
                        tipo=row['tipo'],
                        unidade_medida=row.get('unidade_medida'),
                        latitude=float(row['latitude']),
                        longitude=float(row['longitude']),
                        localizacao=row['localizacao'],
                        responsavel=row.get('responsavel', ''),
                        status_operacional=row['status_operacional'].strip().lower() == 'true',
                        observacao=row.get('observacao', ''),
                        mac_address=row.get('mac_address')
                    )

            return Response('Dados carregados com sucesso!', status=status.HTTP_200_OK)

        except Exception as e:
            return Response(f'Erro: {str(e)}', status=status.HTTP_500_INTERNAL_SERVER_ERROR)
