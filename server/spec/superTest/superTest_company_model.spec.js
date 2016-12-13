const mongoose    = require('mongoose');
const app = require("../../server.js");
const supertest = require('supertest');
let agent = supertest.agent(app);

let company;

let newCompany = {
	name: 'Elium Academy',
	// mentor: [ savedPerson._id ],
	description: 'Coding Bootcamp',
	location: 'KBC Start it',
	status: 'Active',
	website: 'www.elium.academy',
	socialmedia: {
		twitter: 'twitter.co/elium-academy',
		facebook: 'facebook.com/elium-academy',
		linkedin: 'linkedin.com/elium-academy',
		youtube: 'youtube.com/elium-academy',
		instagram: 'instagr.am/elium-academy'
	},
	// spokePerson :  savedPerson._id ,
	// team: [savedPerson._id, savedPerson._id],
	sector: ['Full Stack' , 'Growth Hack' , 'Education' , 'Bootcamp'],
	skills: ['Web Developement' , 'Entrepreneurship' ],
	onSite : true,
	news: 'Raised 500.000 from the governement for giving quality education',
	pitch: 'Become Full Stack Web Developer in 13 weeks!*',
	lastUpdate : new Date("2016-12-25"),
	partners: ['584aa86063b04926e0f6be95'],
	fundRaised: 800000
};


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

	 
	it('should create a company', function(done){
		agent
		.post('/company/create')
		.send(newCompany)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(201)
			company = JSON.parse(res.text)
		})
		.end(function(err, res){         
			if (err) return done.fail(err);
			done(err)
		})
	})


	it('should find a company and render their details page', function(done){
		agent
		.get('/company/details/' + company._id)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(200)
		})
		.end(function(err, res){         
			if (err) return done.fail(err);
			done(err)
		})
	})


	it('should find a company and render their edit page', function(done){
		agent
		.get('/company/edit/' + company._id)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(200)
		})
		.end(function(err, res){         
			if (err) return done.fail(err);
			done(err)
		})
	})


	it('should find a company and update their details', function(done){
		agent
		.post('/company/update/' + company._id)
		.send(company)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(200)
		})
		.end(function(err, res){         
			if (err) return done.fail(err);
			done(err)
		})
	})
	

	it('should find a company and delete their details', function(done){
		agent
		.get('/company/delete/' + company._id)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(302)
		})
		.end(function(err, res){         
			if (err) return done.fail(err);
			done(err)
		})
	})


});