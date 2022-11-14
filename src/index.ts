import express from "express";
import path from 'path';
import bodyParser from "body-parser";
import routes from "./routes/main";


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/assets', express.static('assets'))

app.use(express.urlencoded({ extended: false }));

app.get("/", (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname,'../views/index.html'));
})

app.use('/api', routes);

app.listen(port, () => {
    console.log(__dirname);
    console.log(`welocme on port http://localhost:${port}/`);
})

export default app;

