import express from "express";
import path from 'path';
import image from './api/image'


const routes = express.Router();


routes.get('/', (req: express.Request, res: express.Response)=>{    
    res.sendFile(path.join(process.cwd(), './views/processor.html'));
})

routes.use('/image',image);




export default routes;