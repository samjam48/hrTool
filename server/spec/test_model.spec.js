const app = require("../configurations/db.js")
const supertest = require('supertest');
let Agent = supertest.agent(app)

// const stackTract = require('stack-trace')
// const path = require('path')
// const colors = require('colors')


describe('GET /persons', function() {
  it('respond with json', function(done) {
    Agent
      .get('/persons')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});



// var person = require('../models/person')

// const mongoose    = require('mongoose');


// mongoose.model('Person');

// let Person = mongoose.model('Person', PersonSchema);

// describe('Person Model Test set', function(){
//     var person_query
//     // beforeAll(function(done){
//     //     spyOn(set.BaseQuerySet.prototype, 'loadPage').and.callThrough()
//     //     starship_query = new set.StarshipQuerySet(done)
//     //     // console.log("startship_query call" + starship_query)
//     // })

// var  newPerson = { 
//     name: "nameTest",
//     gender: "genderTest",
//     location: "locationTest",
//     website: "websiteTest",
//     socialmedia: {
//         twitter: "twitterTest",
//         facebook: "facebookTest",
//         linkedin: "linkedinTest",
//         youtube: "youtubeTest",
//         instagram: "instagramTest",
//     },
//     // workingAt : [{ type: 1, ref: 'Company' }],
//     daysPerWeek: 2,
//     role:  "roleTest",
//     isMentor: true,
//     // menteeList: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
//     skills: {
//         mainSkills: [ "mainSkillsTest", "Test", "Test"],
//         skills: [ "mainSkillsTest", "Test", "Test", "Test", "Test"],
// }}  //,
//     // organizations: [{ type: Schema.Types.ObjectId, ref: 'Company' }] }


//     it('check create person saves to db', function(){
//         console.log(person.create(newPerson))
//         expect(person.create(newPerson)).toEqual()
//     })

//     it('check findOne retrieves one persons details', function() {
        
//         expect(person.findOne(58417a66ab2d3f1a6dc17882)).toEqual()
//     })

//     it('check "all" retrieves details of all persons', function() {
//         // expect(starship_query.next_page).toEqual('http://swapi.co/api/starships/?page=2')
//     })

// })


// // all

// // update

// // delete


// // test company index reference
//     // workingAt
//     // menteeList
//     // organizations