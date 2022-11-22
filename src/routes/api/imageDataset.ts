import express from 'express';
import path from 'path';
import fs from 'fs';



const imageDataset = express.Router();

const imageNamesDataSet: (string | number)[] = [];

//creating api on route data of all images in images folder to fetch it from client side by fetching 
imageDataset.get('/', (req, res) => {

    const imagesPath = path.join(process.cwd(), "./assets/images");
    fs.readdir(imagesPath, (err, files) => {
        files.forEach(file => {
            if (file.endsWith('.jpg') || file.endsWith('.png') ) {
                const fileName: string = file.split('.')[0];
                imageNamesDataSet.push(fileName)
            }
        })
        res.json(imageNamesDataSet)

    })

})

export default imageDataset;