const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead('200', { 'Content-Type': 'application/json' }); //Generando un archivo json desde el servidor
    //res.writeHead('200', { 'Content-Type': 'text/plain' }); Generando un texto plano desde el servidor//
    ///res.setHeader('Content-Disposition', 'attachment; filename=list.csv'); Generando un archivo csv desde el servidor
    //res.writeHead('200', { 'Content-Type': 'application/csv' }); Generando un archivo csv desde el servidor

    /*Contenido del archivo csv
    res.write('id, nombre\n');
    res.write('1, Pedro\n');
    res.write('2, Juan\n');
    res.write('3, Santiago\n');
    res.write('4, Mateo\n');*/

    const persona = {
      id: 1,
      name: 'Pepito Perez',
      edad: 31,
    };
    res.write(JSON.stringify(persona));
    res.end();
  })

  .listen(8090);

console.log('Escuchando en el puerto', 8090);
