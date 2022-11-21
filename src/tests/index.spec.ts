import supertest from 'supertest';
import app from '..';

const req = supertest(app);

describe('Test endpoints', () => {
    it('Test resizing form endpoint', async (done) => {
        const res = await req.get('/api/image');
        expect(res.status).toBe(200);
        done()
    })

})





