import path from "path";
import fs from 'fs';
import express from 'express';

// eslint-disable-next-line @typescript-eslint/ban-types
const validator = (req: express.Request, res: express.Response, next: Function): void => {
    const imagesPath = path.join(__dirname, "../../../assets/images")
    try {
        const imageNames: (string | number)[] = [];
        fs.readdir(imagesPath, (err, files) => {
            files.forEach(file => {
                const fileName = file.split('.')[0];
                imageNames.push(fileName)
            })
            if (Object.keys(req.query).length == 0) {
                res.sendFile(path.join(__dirname, '../../../views/processor.html'));
            } else {
                Object.keys(req.query).forEach(Parma => {
                    if (req.query[Parma] == '') {
                        res.sendFile(path.join(__dirname, '../../../views/processor.html'));
                    } else {
                        console.log(req.query["imageName"]);
                    }
                })
            }


        })
    } catch (err) {
        console.log(err);
    }
    next();
};


export default validator;