var chai = require('chai')
var chaiHttp = require('chai-http')
var expect = chai.expect
var app = require('../app')

chai.use(chaiHttp)


describe('GET /foster-search', function() {
  it('yields fosters with their kittens', function(done) {
    chai.request(app)
      .get('/foster-search')
      .send({name: 'Nic'})
      .end(function(err, res) {
        expect(res).to.have.status(200)
        expect(res.body.resultsFoster.length).to.equal(1)
        expect(res.body.resultsFoster[0].name).to.equal('Nicole Hammers')
        expect(res.body.resultsKitten.length).to.equal(2)
        done()
      })
  })
})
