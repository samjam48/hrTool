// const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
// const Person = require("../models/person");
const Company = require('../models/company');


module.exports = router;


router.get('/companies', (req, res) => {
    Company.all((result)=>{
		res.render('companies.ejs', { Companies: result });
	})
})

router.get('/deleteCompanies', (req, res) => {		 
    Company.removeAll(req, ()=>{
		res.redirect('/companies')
	})
})