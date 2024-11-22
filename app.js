const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT;
const app = express();

app.set('view engine', 'hbs'); //Codigo para renderizar vistas sencillas
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico, la carpeta public tiene prioridad sobre las rutas
app.use(express.static('public/page-template'));

/*app.get('/', (req, res) => {
  res.send('Hello World');
}); Este contenido ya no se ejecutara debido al app.use y la public file con el html*/

//Aqui se envia la informacion del render a la vista html
app.get('/', (req, res) => {
  res.render('home', {
    name: 'Pepe Perez',
    title: 'Curso de Node JS ',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Pepe Perez',
    title: 'Curso de Node JS ',
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Pepe Perez',
    title: 'Curso de Node JS ',
  });
});

/*
app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html');
}); este codigo ahora ha sido reemplazado por render*/

/*app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html'); //Agregando un html file al error 404
});*/

app.listen(port, () => {
  console.log(`The server in listening at port || ${port}`);
});
