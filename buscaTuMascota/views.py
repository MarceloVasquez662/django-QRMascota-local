import qrcode
from django.shortcuts import HttpResponse, redirect, render


from buscaTuMascota.models import Mascota

# Create your views here.


def inicio(request):
    if request.method == "GET":
        pass

    return render(request, "inicio.html")


def formularioMascota(request):
    return render(request, "formularioMascota.html")


def agregar(request):
    if request.method == "POST":
        cantidadMascotas = 0
        rutDueno = Mascota.objects.filter(
            rutPropietario__icontains=request.POST["rut"])

        for mascotas in rutDueno:
            cantidadMascotas += 1

        if cantidadMascotas >= 5:
            return render(request, "superaMaximoMascotas.html")
        else:
            if request.POST["nota"].strip() == "":
                nota = ""
            else:
                nota = request.POST["nota"]

            mascota = Mascota(nombre=request.POST["nombre"], fechaNacimiento=request.POST["fecha"], rutPropietario=request.POST["rut"], especie=request.POST["especie"], raza=request.POST["raza"],
                              color=request.POST["color"], telefonoContacto=request.POST["telefono"], direccion=request.POST["direccion"], nota=nota)
            mascota.save()
            mascota.qr = ("https://www.localhost:8000/buscarMascota/?id={}".format(
                mascota.id))
            mascota.save()

            crearQR(mascota.qr)

            return render(request, "mascotaAgregada.html")


def buscarMascota(request):
    if request.method == "GET" and "id" in request.GET:
        if request.GET["id"].strip() == "":
            return redirect("/formularioMascota")
        else:
            try:
                busqueda = Mascota.objects.get(
                    id=request.GET["id"])
            except Mascota.DoesNotExist:
                busqueda = None

            return render(request, "buscarMascota.html", {"resultado": busqueda})
    else:
        return redirect("/formularioMascota")


def recuperarQR(request):
    if request.method == "GET" and "rut" in request.GET:
        mascotas = Mascota.objects.filter(rutPropietario=request.GET["rut"])
        return render(request, "recuperarQR.html", {"mascotas": mascotas})
    elif request.method == "GET" and "qr" in request.GET:
        crearQR(request.GET["qr"])
        return render(request, "recuperarQR.html", {"qr": True})

    return render(request, "recuperarQR.html")


def crearQR(textoqr):
    codigoqr = qrcode.QRCode(version=1, box_size=10, border=5)
    codigoqr.add_data(textoqr)
    codigoqr.make(fit=True)
    qr = codigoqr.make_image(fill="black", back_color="white")
    qr.save("buscaTuMascota/static/buscaTuMascota/qr.png")
