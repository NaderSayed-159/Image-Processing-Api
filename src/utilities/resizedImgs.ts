import path from 'path';
import fs from 'fs';


export const resized: (string | number)[] = [];

const imagesPath = path.join(process.cwd(), "./assets/images/thumbnails");
fs.readdir(imagesPath, (err, files) => {
    files.forEach(file => {
        if (file.endsWith('.jpg')) {
            const fileName: string = file.split('.')[0];
            resized.push(fileName)
        }
    })

})



export default resized;