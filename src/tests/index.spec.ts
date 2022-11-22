/* eslint-disable */
import supertest from 'supertest';
import app from '..';

const req = supertest(app);

describe('Test endpoints', () => {
    it('Test resizing form endpoint', async () => {
        const res = await req.get('/api/image');
        expect(res.status).toBe(200);
    })

    it('Test all images end point', async () => {
        const res = await req.get('/api/image/data');
        expect(res.status).toBe(200);
    })

})





