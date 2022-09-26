import epxress from 'express';
import { router } from './router';
import {engine} from 'express-edge';
import  BodyParser  from 'body-parser';


const app = epxress();

//view engine
app.use(engine);
app.set('views',`${__dirname}/page`);
//static file
app.use(epxress.static('public'));

//body parser
app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())

app.use(router);
app.listen(3000,()=>console.log('Server Running ......'))