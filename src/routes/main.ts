import express from "express";
import path from 'path';
import image from './api/image'

const routes = express.Router();


routes.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../../views/processor.html'));
})

routes.use('/image',image);




export default routes;