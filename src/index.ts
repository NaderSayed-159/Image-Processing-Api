import express from "express";
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, './')));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname,'../index.html'));
})

app.listen(port, () => {
    console.log(`welocme on port ${port}`);
})



export default app;

