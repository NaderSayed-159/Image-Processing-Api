import express from "express";
import path from "path";
import fs from "fs";
import imageDataset from "./imageDataset";
import resizedimgsArr, { resizeImg } from "../../utilities/resizedImgs";

const image = express.Router();

//hadnle routes
image.get("/", (req: express.Request, res: express.Response): void => {
  const imagesPath = path.join(process.cwd(), "./assets/images");
  //do validation on request apply resizing
  try {
    const imageNames: (string | number)[] = [];
    //get all imgs in images folder
    fs.readdir(imagesPath, async (err, files) => {
      files.forEach((file) => {
        const fileName: string = file.split(".")[0];
        imageNames.push(fileName);
      });
      //validations on params
      if (Object.keys(req.query).length == 0) {
        console.log("no paramaters");
        res.status(400).send("you should add parameters");
      } else if (Object.values(req.query).includes("")) {
        res.status(400).send(`no paramter should be empty`);
      } else if (Object.values(req.query).includes("0")) {
        res.status(400).send("height or width can't be zero");
      } else {
        // in case passing validation will start resizing process
        //parameters
        const imgName: string = req.query["imageName"] as string;
        const imgWidth = parseInt(req.query["imgWidth"] as string);
        const imgHeight = parseInt(req.query["imgHeight"] as string);
        //resized imgs details
        const resizedImgPath = `${imagesPath}\\${req.query["imageName"]}.jpg`;
        const resizedImgName = `${imgName}_${imgWidth}_${imgHeight}`;
        const outputFolder = path.join(
          process.cwd(),
          `./assets/images/thumbnails/${resizedImgName}.jpg`
        );

        if (imageNames.includes(imgName)) {
          if (resizedimgsArr.includes(resizedImgName)) {
            return res.sendFile(
              path.join(
                process.cwd(),
                `/assets/images/thumbnails/${resizedImgName}.jpg`
              )
            );
          } else {
            await resizeImg(resizedImgPath, imgWidth, imgHeight, outputFolder);
            return res.sendFile(
              path.join(
                process.cwd(),
                `/assets/images/thumbnails/${resizedImgName}.jpg`
              )
            );
          }
        } else {
          return res.sendFile(
            path.join(process.cwd(), "./views/missingImg.html")
          );
        }
      }
    });
  } catch (err) {
    res.send("image Processes Error Try again");
  }
});

image.use("/data", imageDataset);
export default image;
