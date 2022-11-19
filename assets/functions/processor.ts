
console.log("welcome from client side");

import fs from 'fs';
import path from 'path';
const imagesPath = path.join(__dirname, "../../../assets/images")

const imageNames: (string | number)[] = [];
fs.readdir(imagesPath, (err, files) => {
    files.forEach(file => {
        const fileName: string = file.split('.')[0];
        imageNames.push(fileName)
    })  
})

console.log(imageNames);
