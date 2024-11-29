from django.db import models

class Sensor(models.Model):     
    TIPOS_SENSOR_CHOICES = [
        ('Temperatura', 'Temperatura'),
        ('Umidade', 'Umidade'),
        ('Contador', 'Contador'),
        ('Luminosidade', 'Luminosidade'),
    ]
    tipo = models.CharField(max_length=50, choices=TIPOS_SENSOR_CHOICES)     
    unidade_medida = models.CharField(max_length=20, blank=True, null=True)
    latitude = models.FloatField()     
    longitude = models.FloatField()
    localizacao = models.CharField(max_length=100)     
    responsavel = models.CharField(max_length=100)
    status_operacional = models.BooleanField(default=True)     
    observacao = models.TextField(blank=True)     
    mac_address = models.CharField(max_length=20, null=True)
    
    def __str__(self):         
        return f"{self.tipo} - {self.localizacao}"


# Model para armazenar os dados de temperatura 
class TemperaturaData(models.Model):     
    TIPOS_SENSOR_CHOICES = [
        ('Temperatura', 'Temperatura'),
        ('Umidade', 'Umidade'),
        ('Contador', 'Contador'),
        ('Luminosidade', 'Luminosidade'),
    ]
    tipo = models.CharField(max_length=50, choices=TIPOS_SENSOR_CHOICES, null=True)  
    unidade_medida = models.CharField(max_length=20, blank=True, null=True)
    latitude = models.FloatField(null=True)     
    longitude = models.FloatField(null=True)
    localizacao = models.CharField(max_length=100,null=True)     
    responsavel = models.CharField(max_length=100, null=True)
    status_operacional = models.BooleanField(default=True, null=True)     
    observacao = models.TextField(blank=True, null=True)     
    mac_address = models.CharField(max_length=20, null=True)
    valor = models.FloatField(null=True)   
    timestamp = models.DateTimeField(auto_now_add=True, null=True)  
    def __str__(self):         
        return f"Temperatura: {self.valor} °C - {self.timestamp}" 
    
# Model para armazenar os dados de umidade 
class UmidadeData(models.Model):     
    TIPOS_SENSOR_CHOICES = [
        ('Temperatura', 'Temperatura'),
        ('Umidade', 'Umidade'),
        ('Contador', 'Contador'),
        ('Luminosidade', 'Luminosidade'),
    ]
    tipo = models.CharField(max_length=50, choices=TIPOS_SENSOR_CHOICES, null=True)  
    unidade_medida = models.CharField(max_length=20, blank=True, null=True)
    latitude = models.FloatField(null=True)     
    longitude = models.FloatField(null=True)
    localizacao = models.CharField(max_length=100,null=True)     
    responsavel = models.CharField(max_length=100, null=True)
    status_operacional = models.BooleanField(default=True, null=True)     
    observacao = models.TextField(blank=True, null=True)     
    mac_address = models.CharField(max_length=20, null=True)
    valor = models.FloatField(null=True)   
    timestamp = models.DateTimeField(auto_now_add=True, null=True)   
    def __str__(self):         
        return f"Umidade: {self.valor}% - {self.timestamp}" 

# Model para armazenar os dados do contador 
class ContadorData(models.Model):
    TIPOS_SENSOR_CHOICES = [
        ('Temperatura', 'Temperatura'),
        ('Umidade', 'Umidade'),
        ('Contador', 'Contador'),
        ('Luminosidade', 'Luminosidade'),
    ]
    tipo = models.CharField(max_length=50, choices=TIPOS_SENSOR_CHOICES, null=True)  
    unidade_medida = models.CharField(max_length=20, blank=True, null=True)
    latitude = models.FloatField(null=True)     
    longitude = models.FloatField(null=True)
    localizacao = models.CharField(max_length=100,null=True)     
    responsavel = models.CharField(max_length=100, null=True)
    status_operacional = models.BooleanField(default=True, null=True)     
    observacao = models.TextField(blank=True, null=True)     
    mac_address = models.CharField(max_length=20, null=True)
    valor = models.FloatField(null=True)   
    timestamp = models.DateTimeField(auto_now_add=True, null=True)        
    def __str__(self):         
        return f"Contagem - {self.timestamp}" 
    
# Model para armazenar os dados de luminosidade 
class LuminosidadeData(models.Model):     
    TIPOS_SENSOR_CHOICES = [
        ('Temperatura', 'Temperatura'),
        ('Umidade', 'Umidade'),
        ('Contador', 'Contador'),
        ('Luminosidade', 'Luminosidade'),
    ]
    tipo = models.CharField(max_length=50, choices=TIPOS_SENSOR_CHOICES, null=True)  
    unidade_medida = models.CharField(max_length=20, blank=True, null=True)
    latitude = models.FloatField(null=True)     
    longitude = models.FloatField(null=True)
    localizacao = models.CharField(max_length=100,null=True)     
    responsavel = models.CharField(max_length=100, null=True)
    status_operacional = models.BooleanField(default=True, null=True)     
    observacao = models.TextField(blank=True, null=True)     
    mac_address = models.CharField(max_length=20, null=True)
    valor = models.FloatField(null=True)   
    timestamp = models.DateTimeField(auto_now_add=True, null=True)   
    def __str__(self):         
        return f"Luminosidade: {self.valor} Lux - {self.timestamp}"


