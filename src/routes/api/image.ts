import express from "express";
import path from 'path';
import validator from "../../utilities/middlewares/validator";

const image = express.Router();

image.get('/', validator,(req,res)=>{
    res.sendFile(path.join(__dirname, '../../../views/resizedImage.html'));
    
})

export default image;