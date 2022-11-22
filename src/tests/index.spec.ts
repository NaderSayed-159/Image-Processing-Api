/* eslint-disable */
import supertest from 'supertest';
import app from '..';
import path from 'path';
import { resizeImg } from '../utilities/resizedImgs';
const req = supertest(app);
const imagesPath = path.join(process.cwd(), "./assets/images/fjord.jpg") as string
const outputFolder = path.join(process.cwd(), `./assets/images/thumbnails/test.jpg`) as string

describe('Test endpoints', () => {
    it('Test resizing form endpoint', async () => {
        const res = await req.get('/api');
        expect(res.status).toBe(200);
    })

    it('test image endpoint no parmas', async () => {
        const res = await req.get('/api/image');
        expect(res.status).toBe(400);
    })

    it('Test all images end point', async () => {
        const res = await req.get('/api/image/data');
        expect(res.status).toBe(200);
    })

})

describe('Test Img Fucntions', () => {
    it('test resizing function', async () => {
        expectAsync(resizeImg(imagesPath, 300, 300, outputFolder)).toBeResolved();
    })
})





