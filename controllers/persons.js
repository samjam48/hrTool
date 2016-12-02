
const mongoose    = require('mongoose');
const express = require('express');
const router = express.Router();
const Person = require("../models/person");
// const Company = require("../models/company");


module.exports = router


router.get('/persons', (req, res) => {		        // render all Persons
	// res.render('persons.ejs')
	mongoose.model('Person').all(function(result){
		res.render('persons.ejs', { Persons: result } )
	})
})

router.get('/Person/details/:id', (req, res) => {	// render Person info
	mongoose.model('Person').findOne(req.params.id , function(result) {
		res.render('details.ejs', {Person:result});
	})
})
// // REMOVE - Rendering done by React
router.get('/Person/new', (req, res) => {           // render create form
	res.render('create.ejs');
})

// CHANGE BORN DETAILS!!!!!
router.post('/Person/create', (req, res) =>{	    //create new Person object and add first sighting
	mongoose.model('Person').save( req, function(){
		let id = req.body._id
		birth = {'id': id,
			 	 'date': req.body.date,
				 'location': req.body.location,
				 'health': req.body.health,
				 'name' : req.body.name }
		// Sighting.born(birth, function(){
		// 	console.log("created a new person")
		// })
		res.redirect('/Person/details/'+ id);
	})
})

router.get('/Person/edit/:id', (req, res) => {		// render edit Person page
	mongoose.model('Person').findOne(req.params.id, function(result){
		res.render('edit.ejs', {Person: result});
	})
})

router.get('/Person/delete/:id', (req, res) => {	// delete Person
	mongoose.model('Person').delete(req, function() {
		res.redirect('/');
	})
})



// ---------------------- 'update' = SUSPECT - MAY HAVE ISSUES !!!!!!! -------------------------------------
router.post('/Person/update/:id', (req, res) => {	// save changes to db
	mongoose.model('Person').update(req, function() {
		let id = req.body._id    // not working for some mental reason =[
		res.redirect('/Person/details/'+ id);      	
		res.redirect('/');
	})
})




//  ---------------------- 'removeAll' = TEMP FUNCTION NOT FOR DEPLOYEMENT!-------------------------------------
router.get('/deletePersons', (req, res) => {		        // delete all person and render home page
    mongoose.model('Person').removeAll(req, function(){
		res.redirect('/persons')
	})
}) 


