import express from "express";
import path from 'path';

const image = express.Router();

image.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../../../views/resizedImage.html'));
})

export default image;