import Supertest from 'supertest';
import Chai from 'chai';


const expect = Chai.expect;
const requester = Supertest('http://localhost:8080');

describe('User testing', () => {
  describe('GETS', () => {
    it('la peticion debe retornar 200', async () => {
      let response = await requester.get('/api/users')
      expect(response.status).to.be.equal(200)
    })
    it('la peticion debe retornar un arreglo de usuarios', async () => {
      let response = await requester.get('/api/users');
      const {_body} = response;
      expect(_body.payload).to.be.an('array')
    })
  })

  describe('POSTS', () => {
    it('la peticion deberia crear un usuario', async () => {
      let user = {
        email: 'email@example.com',
        name: 'Cinthia',
        last_name: 'Villegas',
        age: 48,
        nickname: 'patito',
        avatar: 'http://www.example.com',
        password: '458'
      }
     
      const response = await requester.post('/api/sessions/register').send(user);
      const {_body} = response;
      expect(_body.payload).to.include.keys('password','_id')
    })
    it('la peticion debe retornar un 400', async () => {
      let user = {
        last_name: 'Villegas',
        age: 48,
        nickname: 'patito',
        avatar: 'http://www.example.com',
        password: '458'
      }
      const response = await requester.post('/api/sessions/register').send(user);
      const {_body} = response;
      expect(response.status).to.be.equal(400)
    })
  })
})

describe('Products testing', () => {
  describe('GETS', () => {
    it('la peticion debe retornar 200', async () => {
      let response = await requester.get('/api/products')
      expect(response.status).to.be.equal(200)
    })
    it('la peticion debe retornar un arreglo de usuarios', async () => {
      let response = await requester.get('/api/products');
      const {_body} = response;
      expect(_body.payload).to.be.an('array')
    })
  })

  describe('POSTS', () => {
    it('la peticion debe mostrar 500', async () => {
      let product = {
        name: 'mini gris',
        price: 15000,
        description: 'Mini gris en varios talles',
        code: '5sdf879d',
        stock:10,
      }
     
      const response = await requester.post('/api/products').send(product);
      const {_body} = response;
      expect(response.status).to.be.equal(500)
    })
   
  })
})