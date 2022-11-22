import express from "express";
import path from 'path';


const gallery = express.Router();


gallery.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), './views/resizedGallary.html'));
})

export default gallery;