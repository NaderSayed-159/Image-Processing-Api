import express from 'express';
import path from 'path';
import fs from 'fs';



const imageDataset = express.Router();

imageDataset.get('/', (req, res) => {
    const imageNames: (string | number)[] = [];

    const imagesPath = path.join(process.cwd(), "./assets/images");
    fs.readdir(imagesPath, (err, files) => {
        files.forEach(file => {
            if(file.endsWith('.jpg')){
                const fileName: string = file.split('.')[0];
                imageNames.push(fileName)
            }
     
        })
        res.json(imageNames)

    })

})

export default imageDataset;