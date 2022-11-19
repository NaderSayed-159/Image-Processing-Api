import express from 'express';
import path from 'path';
import fs from 'fs';



const imageDataset = express.Router();
const imageNames: (string | number)[] = [];

imageDataset.get('/', (req, res) => {
    res.send(JSON.stringify(imageNames))

    const imagesPath = path.join(process.cwd(), "./assets/images");
    fs.readdir(imagesPath, (err, files) => {
        files.forEach(file => {
            const fileName: string = file.split('.')[0];
            imageNames.push(fileName)
        })
    })

    res.json(imageNames)
})

export default imageDataset;