const mongoose    = require('mongoose');
const app = require("../../server.js") //require("../configurations/db.js")
const supertest = require('supertest');
let agent = supertest.agent(app)

// const stackTract = require('stack-trace')
// const path = require('path')
// const colors = require('colors')

let person

var newPerson = { 
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



describe ('Routes load correctly', function(){

	it('should render the home page', function(done){
		agent
		.get('/')
		.expect('Content-Type', /html/)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(200)
		})
		.end(function(err, res){         
			if (err) return done.fail(err);
			done(err)
		})
  })

	it('should render an error', function(done){
		agent
		.get('/fckthsst')
		.expect('Content-Type', /html/)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(404)
		})
		.end(function(err, res){         
			if (err) return done.fail(err);
			done(err)
		})
	})
});




describe ('Person controllers', function(){

	it('should render general persons pages', function(done){
		agent
		.get('/person')
		.expect('Content-Type', /html/)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(200)
		})
		.end(function(err, res){         
			if (err) return done.fail(err);
			done(err)
		})
	})


	it('should create a person', function(done){
		console.log(newPerson)
		agent
		.Person('/person/create')
		.send(newPerson)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(201)
			
			person = JSON.parse(res.text)
			console.log(person)
		})
		.end(function(err, res){         
			if (err) return done.fail(err);
			done(err)
		})
	})


	it('should find a person and render their details page', function(done){
		agent
		.get('/person/details/' + person._id)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(200)
		})
		.end(function(err, res){         
			if (err) return done.fail(err);
			done(err)
		})
	})


	it('should find a person and render their edit page', function(done){
		agent
		.get('/person/edit/' + person._id)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(200)
		})
		.end(function(err, res){         
			if (err) return done.fail(err);
			done(err)
		})
	})


	it('should find a person and update their details', function(done){
		agent
		.Person('/person/update/' + person._id)
		.send(person)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(200)
		})
		.end(function(err, res){         
			if (err) return done.fail(err);
			done(err)
		})
	})
	

	it('should find a person and delete their details', function(done){
		agent
		.get('/person/delete/' + person._id)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(302)
		})
		.end(function(err, res){         
			if (err) return done.fail(err);
			done(err)
		})
	})

});

