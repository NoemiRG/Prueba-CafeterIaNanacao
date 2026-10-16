# Prueba-CafeterIaNanacao

# Instrucciones para instalar y ejecutar el proyecto Cafetería Nanacao

**1. Clonar el repositorio**

Abre una terminal y ejecuta el siguiente comando, reemplazando la URL por la dirección del repositorio de GitHub:


git clone https://github.com/NoemiRG/Prueba-CafeterIaNanacao


Luego, ingresa a la carpeta del proyecto:

cd "Cafetería Nanacao"


**2. Instalar las dependencias**

Verifica que Node.js y npm estén instalados ejecutando `node -v` y `npm -v`. Si no están instalados, descárgalos desde https://nodejs.org/.

Instala las dependencias del proyecto con:


npm install

Luego, instala Express y dotenv:

npm install express dotenv

Instala Jest y Supertest como dependencias de desarrollo:

npm install  jest supertest



**3. Ejecutar las pruebas**

Desde la carpeta raíz del proyecto, ejecuta:


npm run test
