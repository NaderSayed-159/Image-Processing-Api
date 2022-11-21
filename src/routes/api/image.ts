import express from "express";
import path from 'path';
import fs from 'fs';
import sharp from "sharp";
import imageDataset from "./imageDataset";
import resizedimgsArr from "./resizedImgs";

const image = express.Router();

image.get('/', (req, res) => {
    // sharp(`../../../assets/images/${req.query.imageName}.jpg`)
    //     .resize(req.query["Width"], req.query.Height)
    //     .toFile(`${path.join(__dirname, "../../../assets/images/thumbnails")}`, (err: string, info: string ) => { console.log(info);
    //      });
    const imagesPath = path.join(process.cwd(), "./assets/images")

    try {
        const imageNames: (string | number)[] = [];
        // const Extensions: string[] = [];
        fs.readdir(imagesPath, async (err, files) => {
            files.forEach(file => {
                const fileName: string = file.split('.')[0];
                imageNames.push(fileName)
                // Extensions.push(file.split('.')[1])
            })
            if (Object.keys(req.query).length == 0) {
                console.log('no paramaters');

                return res.sendFile(path.join(process.cwd(), './views/processor.html'));
            } else if (Object.values(req.query).includes('')) {
                console.log('missed paramter');
                return res.sendFile(path.join(process.cwd(), './views/processor.html'));
            } else {
                const resizedimgName = req.query["imageName"];
                const imgWidth: number = parseInt(req.query["imgWidth"] as string)
                const imgHeight: number = parseInt(req.query["imgHeight"] as string)
                const resizedImgPath = `${imagesPath}\\${req.query["imageName"]}.jpg`
                const outputFolder = path.join(process.cwd(), `./assets/images/thumbnails/${resizedimgName}_${imgWidth}_${imgHeight}.jpg`)
                const resizedImgName = `${resizedimgName}_${imgWidth}_${imgHeight}`

                if (!resizedimgsArr.includes(resizedImgName)) {
                    await sharp(resizedImgPath)
                        .resize(imgWidth, imgHeight)
                        .toFormat("jpg")
                        .toFile(outputFolder)
                    return res.sendFile(path.join(process.cwd(), `/assets/images/thumbnails/${resizedImgName}.jpg`));
                } else {
                    return res.sendFile(path.join(process.cwd(), `/assets/images/thumbnails/${resizedImgName}.jpg`));
                }


            }
        })
    } catch (err) {
        console.log(err);
    }
})

image.use('/data', imageDataset)
export default image;