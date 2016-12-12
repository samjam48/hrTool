require("../../configurations/db.js")
const mongoose = require('mongoose');

let Company = require('../../models/company');
let Person = require('../../models/person');

describe('Company Model Test set', function(){
    
    let savedCompany;
    let savedPerson;
    let newPerson;
    let newCompany;

     beforeAll((done) => {
        newPerson = new Person({ 
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
            // workingAt : [{ type: 1, ref: 'Company' }],
            daysPerWeek: 2,
            role:  "roleTest",
            isMentor: true,
            // menteeList: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
            // organizations: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
            skills: {
                mainSkills: [ "mainSkillsTest", "Test", "Test"],
                skills: [ "mainSkillsTest", "Test", "Test", "Test", "Test"]
            }
        })

         
        newPerson.save((err,res) => {
            if (err) throw err;
            savedPerson = res;
            
            newCompany = new Company({
                name: 'Elium Academy',
                mentor: [ savedPerson._id ],
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
                spokePerson :  savedPerson._id ,
                team: [savedPerson._id, savedPerson._id],
                sector: ['Full Stack' , 'Growth Hack' , 'Education' , 'Bootcamp'],
                skills: ['Web Developement' , 'Entrepreneurship' ],
                onSite : true,
                news: 'Raised 500.000 from the governement for giving quality education',
                pitch: 'Become Full Stack Web Developer in 13 weeks!*',
                lastUpdate : new Date("2016-12-25"),
                partners: ['584aa86063b04926e0f6be95'],
                fundRaised: 800000
            });


            newCompany.save((err,res) => {
                if (err) throw err;
                savedCompany = res;

                done();
            });

        });
    });



    it('should check saved company has correct fields', () => {
        expect(savedCompany).toEqual(newCompany);
    });

    it('should find the correct company', (done) => {
        mongoose.model('Company').findCompany(savedCompany._id, (err, res) => {
            expect(err).toBeNull();
            expect(res.name).toEqual(savedCompany.name);
            expect(res.website).toEqual(savedCompany.website);
            done();
        });
    });

    it('check find all finds all companies', function(done){
        mongoose.model('Company').all((err, res) => {
          expect(err).toBeNull();
          expect(res).not.toBeNull();

          done();
        });
    });

    it('should delete the correct company', (done) => {
        mongoose.model('Company').delete(savedCompany._id, ((err, res) => {
            expect(res.result.ok).toBeTruthy();
            done()
        }));
    });

    it('should delete all companies', (done) => {
        mongoose.model('Company').removeAll((err, res) => {
            expect(res.result.ok).toBeTruthy();
            done();
        });
    });

});
