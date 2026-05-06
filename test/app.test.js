const request = require('supertest');
const { app, server } = require('../app');

 afterAll(() => {
  server.close();
  });

describe('GET /',() => {
   it('should return Hello, Taski Technologies', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello, Taski Technologies');
 });


