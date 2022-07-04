import express from 'express';
import cors from 'cors';
import morgan from "morgan";
import * as dotenv from 'dotenv';
import routes from './index.routes';

dotenv.config({path: __dirname+"/.env"});

const app = express();

app.set('port', process.env.PORT_DB || 4000)

app.use(morgan('dev'))
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes);

export default app;






/* export class Server {

    port: number;
    app: any;

    public constructor(port: number){
        this.port = port;
        this.app = express();
        this.init();
    }

    init(){
        
    }


    public listener(){
        this.app.listen(this.port,()=>{
            console.log("Servidor en el puerto: ",this.port);
        })
    }       



} */