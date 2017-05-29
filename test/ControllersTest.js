//const mocha = require('mocha')
const express = require('../custom-express')()
const request = require('supertest')(express)

describe('#ControllersTest', () => {

  it('Listing products in JSON', (done) => {
    request.get('/products')
           .set('Accept', 'application/json')
           .expect('Content-Type', /json/)
           .expect(200, done)
  })

  it('Default customer', (done) => {
    request.post('/checkout')
           .send({ selectCustomer: 'other',
                  'PROD-classic': '1',
                  'PROD-standout': '1',
                  'PROD-premium': '1' })
           .set('Accept', 'application/json')
           .expect('Content-Type', /json/)
           .expect(200, done)
  })

})
