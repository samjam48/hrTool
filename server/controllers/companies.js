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
            // address :  {			// TO DECIDE HOW THE FORM WILL SEND THE DATA. AS A WHOLE OBJECT OR INDIVIDUAL ELEMENTS?
            //     streetName  : req.body String,
            //     streetNumber  : req.body Number,
            //     postCode  : req.body Number,
            //     locality  : req.body String,
            //     city  : req.body String,
            //     country  : req.body String,
            // },
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
        // if (err) throw err;
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





// demo company
// router.get('/create', (req, res) => {
//   const newCompany = new Company({
//     name: 'Elium Academy Router',
// 		// mentor: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
//     description: 'Coding Bootcamp',
//     address: {
//     streetName: 'Science Road',
//     streetNumber: 23,
//     postCode: 1000,
//     locality: 'Brussels',
//     city: 'Brussels',
//     country: 'Belgium',
//   },
//     status: 'Active',
//     website: 'www.elium.academy',
//     socialmedia: {
//     twitter: 'twitter.co/elium-academy',
//     facebook: 'facebook.com/elium-academy',
//     linkedin: 'linkedin.com/elium-academy',
//     youtube: 'youtube.com/elium-academy',
//     instagram: 'instagr.am/elium-academy',
//   },
// 		// spokePerson : { type: Schema.Types.ObjectId, ref: 'Person' },
// 		// team: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
//     sector: ['Full Stack', 'Growth Hack', 'Education', 'Bootcamp'],
//     skills: ['Web Developement', 'Entrepreneurship'],
//     onSite: true,
//     news: 'Raised 500.000 from the governement for giving quality education',
//     pitch: 'Become Full Stack Web Developer in 13 weeks!*',
//     lastUpdate: new Date('2016-12-25'),
//     partners: [{ _id: '5841ca9478c7dc23808491a7' }],
//     fundRaised: 800000,
//   });
