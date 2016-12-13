const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
let Company = require('../models/company');
module.exports = router;

router.use('*', (req, res, next) => {
    req.companyData = {
        name: req.body.name,
        mentor: req.body.mentor,
        description: req.body.description,
        location: req.body,
        status: req.body.status,
        website: req.body.website,
            // socialmedia : {			// TO DECIDE HOW THE FORM WILL SEND THE DATA. AS A WHOLE OBJECT OR INDIVIDUAL ELEMENTS?
            //     twitter : req.body String,
            //     facebook : req.body String,
            //     linkedin : req.body String,
            //     youtube : req.body String,
            //     instagram : req.body String
            // },
        spokePerson: req.body.spokePerson,
        team: req.body.team,
        sector: req.body.sector,
        skills: req.body.skills,
        onSite: req.body.onSite,
        news: req.body.news,
        pitch: req.body.pitch,
        lastUpdate: req.body.lastUpdate,
        partners: req.body.partners,
        fundRaised: req.body.fundRaised
    }
    req.newCompany = new Company (req.companyData);
    next()
})


router.get('/', (req, res) => {
    mongoose.model('Company').all((err, result) => {
        res.render('companies.ejs', { Companies: result });
    });
});

router.post('/create', (req, res) => {
    req.newCompany.save((err, result) => {
        if (err) res.status(401).json();
        res.status(201).json(result);
    });
    // res.redirect('/company');
});

router.get('/details/:id', (req, res) => {
    mongoose.model('Company').findCompany(req.params.id, (err, result) => {
        res.render('companyDetails.ejs', { Company: result });
    });
});


router.get('/edit/:id', (req, res) => {		
    mongoose.model('Company').findCompany(req.params.id, (err, result) => {
        res.render('editCompany.ejs', { Company: result });
    });
});


router.post('/update/:id', (req, res) => {	
    Company.update({_id: req.params.id}, req.companyData , (err, result) => {
        if (err) res.status(400).json();
		res.status(200).json(result)
	})
});


router.get('/delete/:id', (req, res) => {
    mongoose.model('Company').delete(req.params.id, (err, result) => {
        res.redirect('/company');
    });
});


router.get('/deleteCompanies', (req, res) => {		       
    mongoose.model('Company').removeAll((err, result) => {
        res.redirect('/company')
    });
}) 

