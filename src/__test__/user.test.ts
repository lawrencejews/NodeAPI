import * as user from '../handlers/user'

describe('use handler', () => {
  it('should do something when something happens', () => {
    expect(1).toBe(1)
  })
})

describe('user handler', () => {
  it('should create a new user', async () => {
    const req = { body: { username: 'Bulamu', password: "admin" } }
    const res = {
      json({ token }) {
      expect(token).toBeTruthy()
      }
    }
    
     await user.createNewUser(req, res, () => {

    })
  })
})