
const mongoose    = require('mongoose');
const express = require('express');
const router = express.Router();
const Person = require("../models/person");
// const Company = require("../models/company");


module.exports = router


router.get('/persons', (req, res) => {		        // render all Persons
	// res.render('persons.ejs')
    Person.all(function(result){
		res.render('persons.ejs', { Persons: result } )
	})
})

router.get('/Person/details/:id', (req, res) => {	// render Person info
	Person.findOne(req, function(result) {
		res.render('details.ejs', {Person:result});
	})
})

router.get('/Person/new', (req, res) => {           // render create form
	res.render('create.ejs');
})

// CHANGE BORN DETAILS!!!!!
router.post('/Person/create', (req, res) =>{	    //create new Person object and add first sighting
	Person.create(req, function(){
		let id = req.body._id
		birth = {'id': id,
				'date': req.body.date,
				'location': req.body.location,
				'health': req.body.health,
				'name' : req.body.name}
		Sighting.born(birth, function(){
			console.log("create 1st sighting")
		})
		res.redirect('/Person/details/'+ id);
	})
})

router.get('/Person/edit/:id', (req, res) => {		// render edit Person page
	Person.findOne(req, function(result){
		res.render('edit.ejs', {Person: result});
	})
})


// SUSPECT
router.post('/Person/update/:id', (req, res) => {	// save changes to db
	Person.update(req, function() {
		let id = req.body._id    // not working for some mental reason =[
		res.redirect('/Person/details/'+ id);      	
		res.redirect('/');
	})
})

router.get('/Person/delete/:id', (req, res) => {	// delete Person
	Person.delete(req, function() {
		res.redirect('/');
	})
})

router.get('/deletePersons', (req, res) => {		        // render home page and all Persons
	// res.render('persons.ejs')
    Person.removeAll(req, function(){
		res.redirect('/persons')
	})
})