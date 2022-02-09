from django.contrib import admin
from buscaTuMascota.models import Mascota

# Register your models here.


class mascotaAdmin(admin.ModelAdmin):
    list_display = ("nombre", "fechaNacimiento", "especie", "raza", "color",
                    "rutPropietario", "telefonoContacto", "direccion", "nota", "estaPerdido", "qr")
    search_fields = ("nombre", "rutPropietario", "telefonoContacto",)
    list_filter = ("estaPerdido",)


admin.site.register(Mascota, mascotaAdmin)
