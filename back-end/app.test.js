const supertest = require('supertest')
const app = require('./index')

describe('user', () => { 

    describe('testing for login', () => {
        test('register', async () => {
            const body = {
                email : 'azerty@gmail.com',
                password : '1234'
            }
            const response = await supertest(app).post('user/add').send(body)
            expect(response.body.message).toBe('email deja exist')
        })
    })
    // describe('register employes', () => {

    // })


 
})