
const mongoose    = require('mongoose');
const express = require('express');
const router = express.Router();
const Person = require("../models/person");
// const Company = require("../models/company");


module.exports = router


router.get('/beavers', (req, res) => {		        // render home page and all beavers
	Beaver.all(function(result){
		res.render('beavers.ejs', {beavers: result})
	})
})