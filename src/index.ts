import app from './app';
import './database/mongodb';

/* import * as dotenv from 'dotenv';
dotenv.config({path: __dirname+"/.env"}); */

let port = app.get('port');
app.listen(port);

console.log('Server on port: '+ port)