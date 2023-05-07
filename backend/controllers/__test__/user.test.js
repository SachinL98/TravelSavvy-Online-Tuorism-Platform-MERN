const request = require('supertest')
const app = require('../../routes/auth')

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/signup')
      .send({
        firstname:"Kamal",
        lastname:"Perera",
        mobilenumber: "0776142595",
        type:"admin",
        email:"kamal78@gmail.com",
        password:"Pasan@1234",
        confirmpassword:"Pasan@1234"
    })
    expect(res.statusCode).toEqual(200)
  })
})



