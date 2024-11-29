# Generated by Django 5.0.7 on 2024-11-29 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app_smart", "0004_remove_temperaturadata_sensor_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="contadordata",
            name="sensor",
        ),
        migrations.RemoveField(
            model_name="luminosidadedata",
            name="sensor",
        ),
        migrations.RemoveField(
            model_name="umidadedata",
            name="sensor",
        ),
        migrations.AddField(
            model_name="contadordata",
            name="latitude",
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name="contadordata",
            name="localizacao",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="contadordata",
            name="longitude",
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name="contadordata",
            name="mac_address",
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name="contadordata",
            name="observacao",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="contadordata",
            name="responsavel",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="contadordata",
            name="status_operacional",
            field=models.BooleanField(default=True, null=True),
        ),
        migrations.AddField(
            model_name="contadordata",
            name="tipo",
            field=models.CharField(
                choices=[
                    ("Temperatura", "Temperatura"),
                    ("Umidade", "Umidade"),
                    ("Contador", "Contador"),
                    ("Luminosidade", "Luminosidade"),
                ],
                max_length=50,
                null=True,
            ),
        ),
        migrations.AddField(
            model_name="contadordata",
            name="unidade_medida",
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AddField(
            model_name="contadordata",
            name="valor",
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name="luminosidadedata",
            name="latitude",
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name="luminosidadedata",
            name="localizacao",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="luminosidadedata",
            name="longitude",
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name="luminosidadedata",
            name="mac_address",
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name="luminosidadedata",
            name="observacao",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="luminosidadedata",
            name="responsavel",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="luminosidadedata",
            name="status_operacional",
            field=models.BooleanField(default=True, null=True),
        ),
        migrations.AddField(
            model_name="luminosidadedata",
            name="tipo",
            field=models.CharField(
                choices=[
                    ("Temperatura", "Temperatura"),
                    ("Umidade", "Umidade"),
                    ("Contador", "Contador"),
                    ("Luminosidade", "Luminosidade"),
                ],
                max_length=50,
                null=True,
            ),
        ),
        migrations.AddField(
            model_name="luminosidadedata",
            name="unidade_medida",
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AddField(
            model_name="umidadedata",
            name="latitude",
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name="umidadedata",
            name="localizacao",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="umidadedata",
            name="longitude",
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name="umidadedata",
            name="mac_address",
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name="umidadedata",
            name="observacao",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="umidadedata",
            name="responsavel",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="umidadedata",
            name="status_operacional",
            field=models.BooleanField(default=True, null=True),
        ),
        migrations.AddField(
            model_name="umidadedata",
            name="tipo",
            field=models.CharField(
                choices=[
                    ("Temperatura", "Temperatura"),
                    ("Umidade", "Umidade"),
                    ("Contador", "Contador"),
                    ("Luminosidade", "Luminosidade"),
                ],
                max_length=50,
                null=True,
            ),
        ),
        migrations.AddField(
            model_name="umidadedata",
            name="unidade_medida",
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name="contadordata",
            name="timestamp",
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name="luminosidadedata",
            name="timestamp",
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name="luminosidadedata",
            name="valor",
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name="umidadedata",
            name="timestamp",
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name="umidadedata",
            name="valor",
            field=models.FloatField(null=True),
        ),
    ]
