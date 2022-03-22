/*
-¿Qué es un middleware?
Este es el software que se sitúa entre un sistema operativo y las aplicaciones que se ejecutan
en el. En pocas palabras, funciona como una capa de traducción que permite la comunicación y la
administración de los datos en las aplicaciones distribuidas. Se le suele denominar como "plumbing"
o tuberías porque conecta dos aplicaciones para que estos puedan pasarse fácilmente datos
y bases de datos por una canalización. Permite funcionalidades como hacer solicitudes como el envío de
formularios en explorador web o permitir que un servidor web devuelva páginas web dinámicas.

-¿Cuál es el significado del término “MEAN stack” ?
MEAN se refiere a una pila de aplicaciones basada en Mongo DB, Express, Angular y Node JS.
Es un marco de desarrollo Javascript full stack pnesado para facilitar las cosas y diseñar sitios web 
dinámicos y aplicaciones de todo tipo.

-¿Cuáles son las características/funcionalidades que Express ofrece como middleware?
Integración con motores de renderización de vistas, establecimiento de ajustes de aplicaciones web,
escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL.

-¿Qué es una ruta en express?
Una ruta es una forma de declarar URLs para la aplicación web.

-¿Qué es un “route handler” en express y para qué se utiliza?
Es un manejador de rutas, usualmente utilizado para proveer multiples funciones callback, en la que se pueda usar
a estas para invocar a la siguiente ruta. Pueden ser en forma de funcion, en un array de funciones o en una combinación de ambos.

-¿Cuáles son los 2 parámetros necesarios para crear una ruta para el método GET con express, ejemplo: app.get()?
req y res.

-¿Qué es lo que hace la instrucción res.send?
Envía la respuesta HTTP.

-¿Cuál es el motivo por el que express es tan popular?
Porque facilita la migración de programadores web de Javascript de lado cliente a desarrollo de lado servidor,
y en parte porque también es eficiente con los recursos.



*/
//Primero se inicializa el npm mediante npm init -y
//Después se procede instalando express mediante npm install express
const express = require('express');
const app = express();
//Así se inicia en el código, para el express.
//Además se instala el nodemon mediante npm install -g nodemon, y se le da acceso en la computadora

app.get('/', (req, res) => { //route handler
    res.send(`Hello world, this is the root route`);
});
//Este será el mensaje que se mostrará cuando se esté en la ruta raíz, por eso es que es '/'.

app.listen(3000);
app.get('/uno', (req, res) => {
    res.send(`Hello world, frome route one`);
});
//Cuando se esté en la ruta '/uno' se desplegará este mensaje.

app.get('/prueba', (req, res) => {
    res.send('<html>Hello world, frome route prueba</html>');
});
//Una vez en la ruta '/prueba' se desplegará este mensaje en formato html.