import express from "express";
import path from 'path';

const app = express();
const port = 3000;


app.use('/static', express.static("../public/"))

app.use(express.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => {
    
    res.sendFile(path.join(__dirname,'../index.html'))
})

app.listen(port, () => {
    console.log(`welocme on port ${port}`);
})



export default app;

