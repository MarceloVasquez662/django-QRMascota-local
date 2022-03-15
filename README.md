
## Nombre del Proyecto

QRAnimal / Python + Django

## Descripcion

¿Tu mascota necesita una identificación? QRAnimal es capaz de registrar tu mascota y generar un QR imprimible para que puedas colocarla en su collar.

## Imagenes del proyecto 

![Inicio](https://raw.githubusercontent.com/MarceloVasquez662/django-QRMascota-local/master/imagenesProyecto/Inicio.png)
![Agregar](https://raw.githubusercontent.com/MarceloVasquez662/django-QRMascota-local/master/imagenesProyecto/Agregar.png)
![Recuperar](https://raw.githubusercontent.com/MarceloVasquez662/django-QRMascota-local/master/imagenesProyecto/Recuperar.png)
![Recuperacion](https://raw.githubusercontent.com/MarceloVasquez662/django-QRMascota-local/master/imagenesProyecto/Recuperacion.png)
![QR](https://raw.githubusercontent.com/MarceloVasquez662/django-QRMascota-local/master/imagenesProyecto/QR.png)
![Buscar](https://raw.githubusercontent.com/MarceloVasquez662/django-QRMascota-local/master/imagenesProyecto/Buscar.png)

## Instalacion y pruebas

El proyecto esta funcionando solo en modo local momentaneamente. 

- Copiamos el repositorio en la dirección deseada (Ejecutamos *git clone https://github.com/MarceloVasquez662/django-QRMascota-local.git*)
- Nos desplazamos dentro del proyecto y activamos el entorno virtual para que las librerias utilizadas funcionen (Nos desplazamos a .\Scripts\activate)
- Dentro del entorno virtual, arrancamos el proyecto (Ejecutamos *python manage.py runserver*)
- En el navegador, nos dirigimos a localhost:8000 

*Para el proceso es necesario tener instalado GIT y Python.

## Uso

Al ejecutar y llegar al inicio tenemos dos opciones, agregar la mascota o recuperar el QR de la mascota ya registrada. 

En el apartado Agregar mascota podemos registrar en la base de datos, los datos de nuestra mascota para luego recibir un QR con todos los datos y poder visualizarlos al ser escaneados. 

En la pagina de recuperacion de QR podemos solicitar un nuevo QR para nuestra mascota si este se nos ha extraviado. 

La pagina no accedible mediante la interfaz es la que muestra los datos de nuestra mascota y se puede acceder desde el QR. En esta vemos todos los datos de nuestra mascota.

## Estado del proyecto

- Version 1.0
Función en modo local, agregar, recuperar y ver datos