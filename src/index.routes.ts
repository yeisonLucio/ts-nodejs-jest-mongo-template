import express from 'express';

const app = express();
/*  example
app.use("/caja", require('./components/caja/infraestructura/Rutas'));; 
*/

app.get('/', (req, res) => {
    res.send('example route');
})

export default app;