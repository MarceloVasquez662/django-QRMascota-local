# Generated by Django 4.0.1 on 2022-02-01 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buscaTuMascota', '0002_mascota_estaperdido'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mascota',
            name='rutPropietario',
            field=models.CharField(max_length=10),
        ),
    ]
