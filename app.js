require('dotenv').config();
const express = require('express')
const app = express()
const hbs = require('hbs');
const port = process.env.PORT;




app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



// servir contenido estatico 
app.use( express.static('public'));

// app.get('/',  (req, res) => {
//   res.send('Home page')
// })

app.get('/',  (req, res) => {
    res.render('home', {
        nombre: 'felipe berrios',
        titulo: 'Node Curso'
    });
})




  app.get('/generic',  (req, res) => {
    res.render('generic', {
        nombre: 'felipe berrios',
        titulo: 'Node Curso'
    });
})

app.get('/elements',  (req, res) => {
    res.render('elements', {
        nombre: 'felipe berrios',
        titulo: 'Node Curso'
    });
})



app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//app.listen(8080)