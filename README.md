![Phoneview](https://raw.githubusercontent.com/Kejuu/nuxtwebapp/main/readme/1.png?token=ALTTPK6Y66E67UW5GMVGSJLBK5SB2) ![Desktopview](https://raw.githubusercontent.com/Kejuu/nuxtwebapp/main/readme/2.gif?token=ALTTPK6M3XQTUIINAMBIOOTBK5SLC)

Librerias usadas: 
FRONTENT
-Axios
-Nuxt PWA
-Bootstrap

BACKEND
-Nodemon
-Cors
-Express
-fs-extra
-morgan
-molter

PWA
Una de las funcionalidades de un PWA.
![PWA](https://raw.githubusercontent.com/Kejuu/nuxtwebapp/main/readme/3.png?token=ALTTPK4STS3ZKN5MSCQ7ZX3BK5SFK)

How it works
Mediante una solicitud POST(/upload) de la API de backend se pueden enviar distintos tipos de archivo de imagen, estas son guardadas localmente.
Mediante una solicitud GET(/images) de la imagen de backend, escanea el folder donde estan almacenadas las imagenes, devolviendonos un array con el nombre de cada imagen, y a cada objeto se le concatena un http://localhost:8080/
Se monta un servidor local ubicada en el folder de las imagenes.
De parte del frontend, hago una solicitud GET(/images) obteniendo un JSON con sus rutas, luego asignamos el JSON a una variable tipo array[] para posteriormente enviarlo al HTML y listando las imagenes en el Slider(Carousel)

Issues

The Google Chrome browser will not load local file by default due to security reason. 
No solo Google Chrome, la mayoría de navegadores no permiten cargar archivos locales, de preferencia usar servicios de almacenamiento de objetos como Amazon S3 o Cloudinary.
Otra alternativa podría ser codificar el archivo en base64 y guardarlo en una base de datos que permite encoding directamente como postgresql.