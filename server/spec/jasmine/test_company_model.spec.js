const mongoose    = require('mongoose');
var person = require('../../models/person')
var company= require('../../models/company')

//const app = require("../../server.js") 

var personID
var companyID

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
//     // organizations: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
//     skills: {
//         mainSkills: [ "mainSkillsTest", "Test", "Test"],
//         skills: [ "mainSkillsTest", "Test", "Test", "Test", "Test"]
// }}

// mongoose.model('Person', person).create(newPerson, ((err, res) => {

//     personID = res._id
//     // console.log(personID)

// }));

// let newCompany = {
//     name: 'Elium Academy',
//     mentor: [ personID ],
//     description: 'Coding Bootcamp',
//     address: {
//         streetName : 'Science Road',
//         streetNumber : 23,
//         postCode : 1000,
//         locality : 'Brussels',
//         city : 'Brussels',
//         country : 'Belgium',
//     }, 
//     status: 'Active',
//     website: 'www.elium.academy',
//     socialmedia: {
//         twitter: 'twitter.co/elium-academy',
//         facebook: 'facebook.com/elium-academy',
//         linkedin: 'linkedin.com/elium-academy',
//         youtube: 'youtube.com/elium-academy',
//         instagram: 'instagr.am/elium-academy'
//     },
//     // spokePerson : { type: Schema.Types.ObjectId, ref: 'Person' },
//     // team: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
//     sector: ['Full Stack' , 'Growth Hack' , 'Education' , 'Bootcamp'],
//     skills: ['Web Developement' , 'Entrepreneurship' ],
//     onSite : true,
//     news: 'Raised 500.000 from the governement for giving quality education',
//     pitch: 'Become Full Stack Web Developer in 13 weeks!*',
//     lastUpdate : new Date("2016-12-25"),
//     // partners: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
//     fundRaised: 800000
// };


// let Person = mongoose.model('Person', PersonSchema);

// describe('Company Model Test set', function(){
//     // var person_query


//     it('check company saved has correct name', function(done){

//         mongoose.model('Company').create(newCompany, ((err, res) => {

//           expect(res.name).toEqual('Elium Academy')
//           console.log(res.mentor)
//           expect(res.mentor[0]).toEqual(personID)
//           expect(err).toBe(null)

//           companyID = res._id
//         //   console.log(companyID)

//           done();
//         }));

//     })

// })


    // it('check findOne retrieves one persons details', function() {
        
    //     expect(person.findOne(58417a66ab2d3f1a6dc17882)).toEqual()
    // })

    // it('check "all" retrieves details of all persons', function() {
    //     // expect(starship_query.next_page).toEqual('http://swapi.co/api/starships/?page=2')
    // })




// // all

// // update

// // delete





// // test company index reference
//     // workingAt
//     // menteeList
//     // organizations




	// newPerson.save( (err) => {
	// 	if (err) throw err;
	// 	console.log('Person saved successfully from router!');
	// })