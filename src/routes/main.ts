import express from "express";
import path from "path";
import image from "./api/image";

const routes = express.Router();

//form route
routes.get("/", (req: express.Request, res: express.Response): void => {
  res.sendFile(path.join(process.cwd(), "./views/processor.html"));
});

//resized img route
routes.use("/image", image);

export default routes;
