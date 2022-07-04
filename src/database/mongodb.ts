import mongoose, { ConnectOptions } from 'mongoose';
import config from '../config/config';

let mongo = config.database.mongodb;

let url = `mongodb://{auth}${mongo.HOST}:${mongo.PORT}/${mongo.DATABASE}`;

if (mongo.USER){
    url = url.replace('{auth}', `${mongo.USER}:${mongo.PASSWORD}@`);
}else{
    url = url.replace('{auth}','');
}

mongoose.connect(url)
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(err));





