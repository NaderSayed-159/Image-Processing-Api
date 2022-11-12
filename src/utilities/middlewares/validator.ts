import path from "path";
import fs from 'fs';
import express from 'express';

const validator = (req: express.Request, res: express.Response, next: Function): void => {
    const imagesPath = path.join(__dirname, "../../../assets/images")
    try {
        let imageNames: (string | number )[] = [];
        fs.readdir(imagesPath, (err, files) => {
            files.forEach(file => {
                const fileName = file.split('.')[0];
                imageNames.push(fileName)
            })
            
            if (Object.keys(req.query).length != 0) {
                Object.keys(req.query).forEach(Parma => {
                    if (req.query[Parma] == '') {
                        res.redirect('/api')
                    }
                })
                
            } else {
                res.redirect('/api')
            }
        })

    } catch (err) {
        console.log(err);
    }
    next();
};


export default validator;