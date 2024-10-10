const chai = require('chai');
const chaiHttp = require('chai-http');
const app = 'http://localhost:3000';
chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /', () => {
  it('should return a 200 response and "Hello, DevOps World!"', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, DevOps World!');
        done();
      });
  });
});
