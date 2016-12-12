const mongoose    = require('mongoose');
const PersonSchema = require("../../models/person");
var company= require('../../models/company')


let Person = mongoose.model('Person', PersonSchema);
var personID
var companyID

var  newPerson = { 
    name: "nameTest",
    gender: "genderTest",
    location: "locationTest",
    website: "websiteTest",
    socialmedia: {
        twitter: "twitterTest",
        facebook: "facebookTest",
        linkedin: "linkedinTest",
        youtube: "youtubeTest",
        instagram: "instagramTest",
    },
    // workingAt : [{ type: 1, ref: 'Company' }],
    daysPerWeek: 2,
    role:  "roleTest",
    isMentor: true,
    // menteeList: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    // organizations: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
    skills: {
        mainSkills: [ "mainSkillsTest", "Test", "Test"],
        skills: [ "mainSkillsTest", "Test", "Test", "Test", "Test"]
}}

let newCompany = {
    name: 'Elium Academy',
    mentor: [],
    description: 'Coding Bootcamp',
    address: {
        streetName : 'Science Road',
        streetNumber : 23,
        postCode : 1000,
        locality : 'Brussels',
        city : 'Brussels',
        country : 'Belgium',
    }, 
    status: 'Active',
    website: 'www.elium.academy',
    socialmedia: {
        twitter: 'twitter.co/elium-academy',
        facebook: 'facebook.com/elium-academy',
        linkedin: 'linkedin.com/elium-academy',
        youtube: 'youtube.com/elium-academy',
        instagram: 'instagr.am/elium-academy'
    },
    // spokePerson : { type: Schema.Types.ObjectId, ref: 'Person' },
    // team: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    sector: ['Full Stack' , 'Growth Hack' , 'Education' , 'Bootcamp'],
    skills: ['Web Developement' , 'Entrepreneurship' ],
    onSite : true,
    news: 'Raised 500.000 from the governement for giving quality education',
    pitch: 'Become Full Stack Web Developer in 13 weeks!*',
    lastUpdate : new Date("2016-12-25"),
    // partners: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
    fundRaised: 800000
};



describe('Person Model Test set', function(){


    it('check person saved has correct name', function(done){

        mongoose.model('Person').create(newPerson, ((err, res) => {

          expect(res.name).toEqual('nameTest')
          expect(err).toBe(null)

          personID = res._id

          done();
        }));

    })


    it('check findItem finds a correct person', function(done){

        mongoose.model('Person').findItem(personID, ((err, res) => {

          expect(res.name).toEqual('nameTest')
          expect(err).toBe(null)

          done();
        }));

    })


    it('check find all finds all persons', function(done){

        mongoose.model('Person').all((err, res) => {

          expect(res).toEqual(jasmine.any(Array))
          expect(err).toBe(null)

          done();
        });

    })


    it('check delete deletes specific person', function(done){

        mongoose.model('Person').delete(personID, ((err, res) => {
          expect(err).toBe(null)
          done();

          Person.findItem(personID, ((err, res) => {
            expect(res).toBe(null)
            done();
          }));

        }));

    })

})






// // test company index reference
//     // workingAt
//     // menteeList
//     // organizations


    // it('check company saved has correct name', function(done){

    //     newCompany.mentor = personID

    //     mongoose.model('Company').create(newCompany, ((err, res) => {

    //       expect(res.name).toEqual('Elium Academy')
    //       expect(res.mentor[0]).toEqual(personID)
    //       expect(err).toBe(null)

    //       companyID = res._id
    //     //   console.log(companyID)

    //       done();
    //     }));

    // })