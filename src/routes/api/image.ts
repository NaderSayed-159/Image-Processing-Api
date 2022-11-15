import express from "express";
import path from 'path';
import fs from 'fs';
// import sharp from "sharp";

const image = express.Router();

image.get('/', (req, res) => {
    // sharp(`../../../assets/images/${req.query.imageName}.jpg`)
    //     .resize(req.query["Width"], req.query.Height)
    //     .toFile(`${path.join(__dirname, "../../../assets/images/thumbnails")}`, (err: string, info: string ) => { console.log(info);
    //      });
    const imagesPath = path.join(__dirname, "../../../assets/images")
    try {
        const imageNames: (string | number)[] = [];
        fs.readdir(imagesPath, (err, files) => {
            files.forEach(file => {
                const fileName: string = file.split('.')[0];
                imageNames.push(fileName)
            })
            if (Object.keys(req.query).length == 0) {
                return res.sendFile(path.join(__dirname, '../../../views/processor.html'));
            } else {
                Object.keys(req.query).forEach(Parma => {
                    if (req.query[Parma] == '') {
                        return res.sendFile(path.join(__dirname, '../../../views/processor.html'));
                    }
                })
            }
            console.log(req.query["imageName"]);
            return res.sendFile(path.join(__dirname, '../../../views/resizedImage.html'));
        })
    } catch (err) {
        console.log(err);
    }
})

export default image;