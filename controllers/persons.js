
const mongoose    = require('mongoose');
const express = require('express');
const router = express.Router();
const Person = require("../models/person");
// const Company = require("../models/company");


module.exports = router


router.get('/persons', (req, res) => {		        // render home page and all beavers
	// res.render('persons.ejs')
    Person.all(function(result){
		res.render('persons.ejs', { Persons: result } )
	})
})