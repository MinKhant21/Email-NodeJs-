import epxress from 'express';
import { router } from './router';

const app = epxress();
app.use(router);
app.listen(3000,()=>console.log('Server Running ......'))