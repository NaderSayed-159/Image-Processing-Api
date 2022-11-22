import express from "express";
import path from 'path';
import fs from 'fs';
import sharp from "sharp";
import imageDataset from "./imageDataset";
import resizedimgsArr from "../../utilities/resizedImgs";

const image = express.Router();
// export const isImgExist = async (imgName: string, folderImgs: string[]): Promise<boolean> => {
//     return folderImgs.includes(imgName)
// }

image.get('/', (req, res) => {

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

                return res.sendFile(path.join(process.cwd(), './views/processor.html'));
            } else if (Object.values(req.query).includes('')) {
                console.log('missed paramter');
                return res.sendFile(path.join(process.cwd(), './views/processor.html'));
            } else {
                //parameters
                const imgName: string = req.query["imageName"] as string;
                const imgWidth: number = parseInt(req.query["imgWidth"] as string)
                const imgHeight: number = parseInt(req.query["imgHeight"] as string)
                //resized imgs details
                const resizedImgPath = `${imagesPath}\\${req.query["imageName"]}.jpg`
                const resizedImgName = `${imgName}_${imgWidth}_${imgHeight}`
                const outputFolder = path.join(process.cwd(), `./assets/images/thumbnails/${resizedImgName}.jpg`)

                if (imageNames.includes(imgName)) {
                    if (resizedimgsArr.includes(resizedImgName)) {
                        return res.sendFile(path.join(process.cwd(), `/assets/images/thumbnails/${resizedImgName}.jpg`));
                    } else {
                        await sharp(resizedImgPath)
                            .resize(imgWidth, imgHeight)
                            .toFormat("jpg")
                            .toFile(outputFolder)
                        return res.sendFile(path.join(process.cwd(), `/assets/images/thumbnails/${resizedImgName}.jpg`));
                    }
                } else {
                    return res.sendFile(path.join(process.cwd(), './views/missingImg.html'));
                }

            }
        })
    } catch (err) {
        console.log(err);
    }
})

image.use('/data', imageDataset)
export default image;