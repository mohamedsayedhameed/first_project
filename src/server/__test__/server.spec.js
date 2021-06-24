import 'babel-polyfill'
const request = require('supertest');
const express = require('express');

const app = express();

app.get('/getdata', function(req, res) {
  res.status(200).json({ name: 'done!!' });
});

describe('/getdata', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/getdata')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
      
  })
  
});
