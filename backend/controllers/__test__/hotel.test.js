const request = require('supertest')
const app = require('../../routes/hotels')

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/')
      .send({
        name:"Marino Beach Colombo",
        userID:"64564d6d8aa873af4764b504",
        type:"Hotel",
        city:"Colombo",
        address:"Marino Beach Colombo , Colombo", 
        images:"",
        distance:"3.8 km from center",
        desc:"Marino Beach Colombo has an outdoor swimming pool, a garden and terrace in Colombo. Among the facilities of this property are a restaurant, room service and a 24-hour front desk.",
        title:"Top Location: Highly rated by recent guests",
        cheapestPrice:25000
    })
    expect(res.statusCode).toEqual(200)
  })
})



