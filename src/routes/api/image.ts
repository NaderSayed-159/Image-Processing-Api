import express from "express";
import path from 'path';
import fs from 'fs';
import imageDataset from "./imageDataset";
import resizedimgsArr, { resizeImg }from "../../utilities/resizedImgs";

const image = express.Router();
image.get('/', (req:express.Request, res:express.Response) => {
    const imagesPath = path.join(process.cwd(), "./assets/images")
    try {
        const imageNames: (string | number)[] = [];
        fs.readdir(imagesPath, async (err, files) => {
            files.forEach(file => {
                const fileName: string = file.split('.')[0];
                imageNames.push(fileName)
            })
            if (Object.keys(req.query).length == 0) {
                console.log('no paramaters');
                res.status(400).send('you should add parameters')
            } else if (Object.values(req.query).includes('')) {
                res.status(400).send(`no paramter should be empty`)

            } else {
                //parameters
                // const { imgName, imgWidth, imgHeight } = req.query
                const imgName: string = req.query["imageName"] as string;
                const imgWidth = parseInt(req.query["imgWidth"] as string)
                const imgHeight= parseInt(req.query["imgHeight"] as string)
                //resized imgs details
                const resizedImgPath = `${imagesPath}\\${req.query["imageName"]}.jpg`
                const resizedImgName = `${imgName}_${imgWidth}_${imgHeight}`
                const outputFolder = path.join(process.cwd(), `./assets/images/thumbnails/${resizedImgName}.jpg`)

                if (imageNames.includes(imgName)) {
                    if (resizedimgsArr.includes(resizedImgName)) {
                        return res.sendFile(path.join(process.cwd(), `/assets/images/thumbnails/${resizedImgName}.jpg`));
                    } else {
                        await resizeImg(resizedImgPath, imgWidth, imgHeight, outputFolder)
                        return res.sendFile(path.join(process.cwd(), `/assets/images/thumbnails/${resizedImgName}.jpg`));
                    }
                } else {
                    return res.sendFile(path.join(process.cwd(), './views/missingImg.html'));
                }
            }
        })
    } catch (err) {
        res.send('image Processes Error Try again')
    }
})

image.use('/data', imageDataset)
export default image;