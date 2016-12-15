const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
let Company = require('../models/company');
module.exports = router;

router.use('*', (req, res, next) => {
    req.companyData = {
        name: req.body.name,
        // mentor: req.body.mentor,
        // description: req.body.description,
        location: req.body.location,
        // status: req.body.status,
        // website: req.body.website,
        // socialmedia: {
        //     twitter: req.body.twitter,
        //     facebook: req.body.facebook,
        //     linkedin: req.body.linkedin,
        //     youtube: req.body.youtube,
        //     instagram: req.body.instagram
        // },
        // spokePerson: req.body.spokePerson,
        // team: req.body.team,
        // sector: [req.body.sector],
        // skills: [req.body.skills],
        // onSite: req.body.onSite,
        // news: req.body.news,
        // pitch: req.body.pitch,
        // lastUpdate: req.body.lastUpdate, //update by Date.now()
        // partners: req.body.partners,
        // fundRaised: req.body.fundRaised
    }
    req.newCompany = new Company(req.companyData);
    next()
})


router.get('/', (req, res) => {
    mongoose.model('Company').all((err, result) => {
        res.json(result)
    });
});

router.post('/create', (req, res) => {

    req.newCompany.save((err, result) => {
        console.log(err)
        console.log('---------------------------')
        console.log(result)
        if (err) res.status(401).json();
        res.json(result);
    });
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
    Company.update({ _id: req.params.id }, req.companyData, (err, result) => {
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

