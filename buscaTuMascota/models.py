from distutils.command.upload import upload
from django.db import models

# Create your models here.


class Mascota(models.Model):
    nombre = models.CharField(max_length=50)
    fechaNacimiento = models.DateField()
    especie = models.CharField(max_length=30)
    raza = models.CharField(max_length=30)
    color = models.CharField(max_length=30)
    rutPropietario = models.CharField(max_length=10)
    telefonoContacto = models.CharField(max_length=8)
    direccion = models.CharField(max_length=50)
    nota = models.CharField(max_length=100, blank=True, null=True)
    estaPerdido = models.BooleanField(default=False)
    qr = models.ImageField(upload_to="qrs/")

    def __str__(self):
        return "{} {} {} {} {} {} {} {} {} {} {}".format(self.nombre, self.fechaNacimiento, self.especie, self.raza,
                                                         self.color, self.rutPropietario, self.telefonoContacto, self.direccion, self.nota, self.estaPerdido, self.qr)
