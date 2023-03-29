const http = require('http');

http.createServer(( req, res ) => {

   
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');

    // res.writeHead(200, {'Content-Type': 'application/csv'});

     

    // res.write('id, nombre\n');
    // res.write('1, felipe\n');
    // res.write('2, maria\n');
    // res.write('3, pedro\n');
    // res.write('4, jose\n');

    res.write('Hola Mundo');
    res.end();
    
} )
.listen( 8080 );

console.log('escuchando el puerto ', 8080);