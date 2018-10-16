const express = require('express')    //importo express
const app = express()                //inizializzo express
const PORT = process.env.PORT || 3000     //definisce una costante port  che ha 2 valori, devo usare la porta definita, in locale  sulla porta   3000

var courses_offered = [{id: 21, name: 'HCI'},
{id: 28, name:'sweng'}]


app.get('/', (req, res) => res.send('Hello World!'))           //risposta 
app.get('/courses', (req, res) => {
    res.json(courses_offered)              //ritorna come jason la risposta
 })
 
 app.listen(PORT, () => console.log('Example app listening on port'+ PORT))   //fa partire il server
 