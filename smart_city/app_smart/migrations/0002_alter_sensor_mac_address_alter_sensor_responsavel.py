# Generated by Django 5.1.1 on 2024-09-27 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_smart', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sensor',
            name='mac_address',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='sensor',
            name='responsavel',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
