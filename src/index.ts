import express from "express";
import path from 'path';
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, './')));
app.use('/assets', express.static('assets'))

app.use(express.urlencoded({ extended: false }));

app.get("/", (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname,'../index.html'));
})

app.listen(port, () => {
    console.log(__dirname);
    console.log(`welocme on port http://localhost:${port}/`);
})



export default app;

