import app from '../server';
import supertest from 'supertest';

describe('GET /', () => {
  it('should send be some data', async () => {
    const res = await supertest(app)
      .get('/')
    
    expect(res.body.message).toBe('Bulamu')
  })
})