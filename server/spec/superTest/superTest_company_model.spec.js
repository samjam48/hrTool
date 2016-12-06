const mongoose    = require('mongoose');
const app = require("../../server.js") //require("../configurations/db.js")
const supertest = require('supertest');
let agent = supertest.agent(app)

// const stackTract = require('stack-trace')
// const path = require('path')
// const colors = require('colors')

let personID

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



describe ('GET companies.ejs:::', function(){

	it('should render general companies page', function(done){
		agent
		.get('/company')
		.expect('Content-Type', /html/)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(200)
		})
		.end(function(err, res){         
        if (err) return done.fail(err);
        done(err)
  	})
  })
});