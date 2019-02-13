const should = require('should');
const authenticatedRequest = require('../request.test');

describe('GET /api/me', () => {
  it('should return the connected user', async () => {
    await authenticatedRequest
      .get('/api/me')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        should.deepEqual(res.body, {
          id: '0cd30aef-9c4e-4a23-88e3-3547971296e5',
          firstname: 'John',
          lastname: 'Doe',
          email: 'demo@demo.com',
          birthdate: '12/12/1990',
          language: 'en',
          role: 'admin',
          created_at: '2019-02-12T07:49:07.556Z',
          updated_at: '2019-02-12T07:49:07.556Z',
        });
      });
  });
});