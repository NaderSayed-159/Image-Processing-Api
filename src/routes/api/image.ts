import express from "express";
import path from 'path';
import fs from 'fs';
import sharp from "sharp";
import validator from "../../utilities/middlewares/validator";

const image = express.Router();

image.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../views/resizedImage.html'));
    const imagesPath = path.join(__dirname, "../../../assets/images")
    try {
        const imageNames: (string | number)[] = [];
        fs.readdir(imagesPath, (err, files) => {
            files.forEach(file => {
                const fileName = file.split('.')[0];
                imageNames.push(fileName)
            })
        })

        if (Object.keys(req.query).length == 0) {
            console.log("empty");

        }
        
        sharp(`${path.join(__dirname, "../../../assets/images")}/${req.query.imageName}.jpg`)
            .resize(req.query[".Width"], req.query.Height)
            .toFile(`${path.join(__dirname, "../../../assets/images/thumbnails")}`);

        // else if (Object.keys(req.query).length != 0) {
        //     Object.keys(req.query).forEach(Parma => {
        //         if (req.query[Parma] == '') {
        //             res.sendFile(path.join(__dirname, '../../../views/processor.html'));
        //         }
        //     })
        // } else {
        //     res.sendFile(path.join(__dirname, '../../views/resizedImage.html'));
        //     console.log(req.query["imageName"]);
        // }
    } catch (err) {
        console.log(err);
    }
})

export default image;