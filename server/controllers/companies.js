const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Person = require("../models/person");
const CompanySchema = require('../models/company');

// const Mongo       = require('mongodb')
// const ObjectID    = Mongo.ObjectID


module.exports = router;

router.get('/companies', (req, res) => {		        
	mongoose.model('Company').all(function(result){
		res.render('companies.ejs', { Companies: result } )
	})
})

router.get('/Company/details/:id', (req, res) => {	
	
	mongoose.model('Company').findCompany(req, function(result) {
		// console.log(result)
		// console.log('---------------------------')
		// console.log(Object.keys(result))
		res.render('companyDetails.ejs', {Company:result});
	})
})



// // REMOVE - Rendering done by React
router.get('/Company/new', (req, res) => {           // render create form
	res.render('create.ejs');
})



router.post('/Company/create', (req, res) =>{	    
	
	
	let Company = mongoose.model('Company', CompanySchema);

	let newCompany = new Company({
		
		name : req.body.name,
		mentor : req.body.mentor,
		description : req.body.description,
		// address :  {			// TO DECIDE HOW THE FORM WILL SEND THE DATA. AS A WHOLE OBJECT OR INDIVIDUAL ELEMENTS?
		//     streetName  : req.body String,
		//     streetNumber  : req.body Number,
		//     postCode  : req.body Number,
		//     locality  : req.body String,
		//     city  : req.body String,
		//     country  : req.body String,
		// }, 
		status : req.body.status,
		website : req.body.website,
		// socialmedia : {			// TO DECIDE HOW THE FORM WILL SEND THE DATA. AS A WHOLE OBJECT OR INDIVIDUAL ELEMENTS?
		//     twitter : req.body String,
		//     facebook : req.body String,
		//     linkedin : req.body String,
		//     youtube : req.body String,
		//     instagram : req.body String
		// },
		spokePerson  : req.body.spokePerson,
		team : req.body.team,
		sector : req.body.sector,
		skills : req.body.skills,
		onSite  : req.body.onSite,
		news : req.body.news,
		pitch : req.body.pitch,
		lastUpdate  : req.body.lastUpdate,
		partners : req.body.partners,
		fundRaised : req.body.fundRaised


	});

	newCompany.save(function(err) {
	if (err) throw err;
	console.log('StartUp saved successfully from router!');
	});



		res.redirect('/companies');
})

//demo company
router.get('/Company/create', (req, res) =>{	    
	
	
	let Company = mongoose.model('Company', CompanySchema);

	let newCompany = new Company({
		name: 'Elium Academy Router',
		// mentor: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
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
		partners: [{ _id: '5841ca9478c7dc23808491a7' }],
		fundRaised: 800000
	});

	newCompany.save(function(err) {
	if (err) throw err;
	console.log('Demo StartUp successfully saved!');
	});


	res.redirect('/companies');
})



router.get('/Company/edit/:id', (req, res) => {		// render edit Company page
	mongoose.model('Company').findOne(req.params.id, function(result){
		res.render('edit.ejs', {Company: result});
	})
})

router.get('/Company/delete/:id', (req, res) => {	// delete Company
	mongoose.model('Company').delete(req, function() {
		res.redirect('/');
	})
})



// ---------------------- 'update' = SUSPECT - MAY HAVE ISSUES !!!!!!! -------------------------------------
router.post('/Company/update/:id', (req, res) => {	// save changes to db
	mongoose.model('Company').update(req, function() {
		let id = req.body._id    // not working for some mental reason =[
		res.redirect('/Company/details/'+ id);      	
		res.redirect('/');
	})
})




//  ---------------------- 'removeAll' = TEMP FUNCTION NOT FOR DEPLOYEMENT!-------------------------------------
router.get('/deleteCompanies', (req, res) => {		        // delete all Company and render home page
    mongoose.model('Company').removeAll(req, function(){
		res.redirect('/Companies')
	})
}) 
