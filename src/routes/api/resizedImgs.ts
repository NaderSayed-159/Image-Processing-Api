import express from 'express';
import path from 'path';
import fs from 'fs';


// eslint-disable-next-line  @typescript-eslint/ban-types
const resizedImgs = (req: express.Request, res: express.Response ,next:Function) => {
    const resized: (string | number)[] = [];
    const resizedimgName = req.query["imageName"];
    const imgWidth: number = parseInt(req.query["imgWidth"] as string)
    const imgHeight: number = parseInt(req.query["imgHeight"] as string)
    const imagesPath = path.join(process.cwd(), "./assets/images/thumbnails");
    fs.readdir(imagesPath,  (err, files) => {
       files.forEach(file => {
            if (file.endsWith('.jpg')) {
                const fileName: string = file.split('.')[0];
                resized.push(fileName)
            }
        })

        console.log('bool', resized.includes(`${resizedimgName}_${imgWidth}_${imgHeight}`))
        if (resized.includes(`${resizedimgName}_${imgWidth}_${imgHeight}`)) {
            return res.sendFile(path.join(process.cwd(), `/assets/images/thumbnails/${resizedimgName}_${imgWidth}_${imgHeight}.jpg`));
        }
    })

next();
}

export default resizedImgs;