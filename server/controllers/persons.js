
const mongoose    = require('mongoose');
const express = require('express');
const router = express.Router();
const PersonSchema = require("../models/person");
// const Company = require("../models/company");
module.exports = router


	let Person = mongoose.model('Person', PersonSchema);



router.get('/persons', (req, res) => {		        // render all Persons
	// res.render('persons.ejs')
	Person.all( (result) => {
		res.render('persons.ejs', { Persons: result } )
	})
})

router.get('/Person/details/:id', (req, res) => {	// render Person info
	Person.findItem( req , (result) => {
		console.log(result)
		res.render('details.ejs', {Person:result});
	})
})
// // REMOVE - Rendering done by React
router.get('/Person/new', (req, res) => {           // render create form
	res.render('create.ejs');
})

// CHANGE BORN DETAILS!!!!!
router.post('/Person/create', (req, res) => {	    //create new Person object and add first sighting

	var  newPerson = new Person ({
            name: req.body.name,
            gender: req.body.gender,
            location: req.body.location,
            website: req.body.website,
            // socialmedia: {			// TO DECIDE HOW THE FORM WILL SEND THE DATA. AS A WHOLE OBJECT OR INDIVIDUAL ELEMENTS?
            //     twitter: req.body.twitter,
            //     facebook: req.body.facebook,
            //     linkedin: req.body.linkedin,
            //     youtube: req.body.youtube,
            //     instagram: req.body.instagram,
            // },
            workingAt : req.body.workingAt ,
            daysPerWeek: req.body.daysPerWeek,
            role: req.body.role,
            isMentor: req.body.isMentor,
            menteeList: req.body.menteeList,
            // skills: {			// TO DECIDE HOW THE FORM WILL SEND THE DATA. AS A WHOLE OBJECT OR INDIVIDUAL ELEMENTS?
            //     mainSkills: req.body.mainSkills,
            //     skills: req.body.skills,
            // },
            organizations: req.body.organizations
        })
	console.log(newPerson)
	
	newPerson.save( (err) => {
		if (err) throw err;
		console.log('Person saved successfully from router!');
	})
	// CHANGE UX SO USER GOES TO PROFILE OF NEW PERSON AND HAS OPTION TO ADD ANOTHER
	res.redirect('/persons')///details/'+ id);
})


router.get('/Person/edit/:id', (req, res) => {		// render edit Person page
	Person.findItem(req, function(result){
		console.log(result)
		res.render('edit.ejs', {Person: result});
	})
})

router.get('/Person/delete/:id', (req, res) => {	// delete Person
	Person.delete(req, function() {
		res.redirect('/');
	})
})



router.post('/Person/update/:id', (req, res) => {	// save changes to db
	Person.makeUpdate(req, function() {
		let id = req.params.id    // not working for some mental reason =[
		res.redirect('/Person/details/'+ id);      	
		// res.redirect('/');
	})
})




//  ---------------------- 'removeAll' = TEMP FUNCTION NOT FOR DEPLOYEMENT!-------------------------------------
router.get('/deletePersons', (req, res) => {		        // delete all person and render home page
    Person.removeAll(req, function(){
		res.redirect('/persons')
	})
}) 





// ---------------------------------- BASIC TESTING STUFF - REMOVE WHEN ABLE TO ADD USER NORMALLY ----------------------------------------



router.get('/Person/create', (req, res) => {	    //create new Person object and add first sighting
	

	var  newPerson = new Person ({ 
		name: "nameTest",
		gender: "genderTest",
		location: "locationTest",
		website: "websiteTest",
		socialmedia: {
			twitter: "twitterTest",
			facebook: "facebookTest",
			linkedin: "linkedinTest",
			youtube: "youtubeTest",
			instagram: "instagramTest",
		},
		workingAt : [ '5822cab3eb4cdf1978019e43' ],
		daysPerWeek: 2,
		role:  "roleTest",
		isMentor: true,
		menteeList: [ '5841dc1141a35227b4f5f946', '5841d56c98d444260130602c' ],
		skills: {
			mainSkills: [ "mainSkillsTest", "mainSkillsTest", "mainSkillsTest"],
			skills: [ "skillsTest", "skillsTest", "skillsTest", "skillsTest", "skillsTest"],
		}
	})
	console.log(newPerson)
	
	newPerson.save( (err) => {
		if (err) throw err;
		console.log('Person saved successfully from router!');
	})
	res.redirect('/persons')///details/'+ id);
})



router.get('/Person/update/:id', (req, res) => {	// save changes to db
	Person.makeUpdate(req, function() {
		let id = req.params.id    // not working for some mental reason =[
		res.redirect('/Person/details/'+ id);      	
		// res.redirect('/');
	})
})


// let Person = mongoose.model('Person', PersonSchema);

// var  newperson = new Person ({ 
//     name: "nameTest",
//     gender: "genderTest",
//     location: "locationTest",
//     website: "websiteTest",
//     socialmedia: {
//         twitter: "twitterTest",
//         facebook: "facebookTest",
//         linkedin: "linkedinTest",
//         youtube: "youtubeTest",
//         instagram: "instagramTest",
//     },
//     // workingAt : [{ type: Types.ObjectId, ref: 'Company' }],
//     daysPerWeek: 2,
//     role:  "roleTest",
//     isMentor: true,
//     // menteeList: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
//     skills: {
//         mainSkills: [ "mainSkillsTest", "mainSkillsTest", "mainSkillsTest"],
//         skills: [ "skillsTest", "skillsTest", "skillsTest", "skillsTest", "skillsTest"],
// }})
// console.log(newperson)

// newperson.save(function(err) {
//   if (err) throw err;
//   console.log('User saved successfully!');
// });