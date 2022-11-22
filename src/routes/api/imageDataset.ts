import express from 'express';
import path from 'path';
import fs from 'fs';



const imageDataset = express.Router();

const imageNamesDataSet: (string | number)[] = [];
imageDataset.get('/', (req, res) => {

    const imagesPath = path.join(process.cwd(), "./assets/images");
    fs.readdir(imagesPath, (err, files) => {
        files.forEach(file => {
            if (file.endsWith('.jpg')) {
                const fileName: string = file.split('.')[0];
                imageNamesDataSet.push(fileName)
            }
        })
        res.json(imageNamesDataSet)

    })

})

export default imageDataset;