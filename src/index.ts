import express from "express";
import path from 'path';
import bodyParser from "body-parser";
import routes from "./routes/main";
import gallery from "./routes/gallery";


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(process.cwd()))

app.use(express.urlencoded({ extended: false }));

app.get("/", (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(process.cwd(), './views/index.html'));
})

app.use('/api', routes);
app.use('/gallery', gallery);

app.listen(port, () => {
    console.log(`welocme on port http://localhost:${port}/`);
})

export default app;

