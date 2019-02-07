require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controllers/messages_controller')

const {SERVER_PORT, apiUrl} = process.env;

const app = express();

app.use( express.json() );
app.use( express.static( 'server/index/../public/build') )

app.post(`${apiUrl}`, ctrl.create);

app.get(`${apiUrl}`, ctrl.read);

app.put(`${apiUrl}/:id`, ctrl.update);

app.delete(`${apiUrl}/:id`, ctrl.delete);



app.listen(SERVER_PORT, () => { console.log(`Port ${SERVER_PORT}, reporting for duty!`) })