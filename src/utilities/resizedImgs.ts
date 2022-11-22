import path from 'path';
import fs from 'fs';
import sharp from 'sharp';
//resizing imgs function usning sharp  
export const resizeImg = async (resizedImgPath: string, imgWidth: number, imgHeight: number, outputFolder: string): Promise<void>=>{
     await sharp(resizedImgPath)
         .resize(imgWidth, imgHeight)
         .toFormat("jpg")
         .toFile(outputFolder)
}

export const resized: (string | number)[] = [];

//get all resized mgs form thumbnails folder
const imagesPath = path.join(process.cwd(), "./assets/images/thumbnails");
fs.readdir(imagesPath, (err, files) => {
    files.forEach(file => {
        if (file.endsWith('.jpg') || file.endsWith('.png')) {
            const fileName: string = file.split('.')[0];
            resized.push(fileName)
        }
    })
})

export default resized;