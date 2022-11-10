import supertest from 'supertest';
import app from "../index"

const req = supertest(app);

describe('Test endpoint', () => {
    it('get apis endpoint', async (done) => {
        const res = await req.get('/api');
        expect(res.status).toBe(200);
        done()
    })
    //how to test express endpoint with jasmine?
})
