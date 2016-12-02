const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const Mongo       = require('mongodb')
// const ObjectID    = Mongo.ObjectID


let CompanySchema = new Schema({
   
    name: String,
    mentor: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    description: String,
    address: {
        streetName : String,
        streetNumber : Number,
        postCode : Number,
        locality : String,
        city : String,
        country : String,
    }, 
    status: String,
    website: String,
    socialmedia: {
        twitter: String,
        facebook: String,
        linkedin: String,
        youtube: String,
        instagram: String
    },
    spokePerson : { type: Schema.Types.ObjectId, ref: 'Person' },
    team: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    sector: [String],
    skills: [String],
    onSite : Boolean,
    news: String,
    pitch: String,
    lastUpdate : Date,
    partners: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
    fundRaised: Number

},{ collection: 'companies' });


CompanySchema.statics.all = function(cb){
    this.find( {}, function(err, result) {
            if (err) throw err;
			cb(result);
    })
}

CompanySchema.statics.findCompany = function(req, cb){
    this.findById( req.params.id, (err, result) =>{
        if (err) return console.log(err);
        cb(result);
    })
}

CompanySchema.statics.update = function(req, cb){ 
    this.Update({_id: req.params.id},
        {$set:{
            name : req.body.name,
            mentor : req.body.mentor,
            description : req.body.description,
            // address :  {
            //     streetName  : req.body String,
            //     streetNumber  : req.body Number,
            //     postCode  : req.body Number,
            //     locality  : req.body String,
            //     city  : req.body String,
            //     country  : req.body String,
            // }, 
            status : req.body.status,
            website : req.body.website,
            // socialmedia : {
            //     twitter : req.body String,
            //     facebook : req.body String,
            //     linkedin : req.body String,
            //     youtube : req.body String,
            //     instagram : req.body String
            // },
            spokePerson  : req.body.spokePerson,
            // team : [{ type : req.body Schema.Types.ObjectId, ref : req.body 'Person' }],
            sector : req.body.sector,
            skills : req.body.skills,
            onSite  : req.body.onSite,
            news : req.body.news,
            pitch : req.body.pitch,
            lastUpdate  : req.body.lastUpdate,
            // partners : req.body [{ type : req.body Schema.Types.ObjectId, ref : req.body 'Company' }],
            fundRaised : req.body.fundRaised

            
        }},
        (err, result) => {
            if (err) return console.log(err);
            cb(result);
        }
    )
}

CompanySchema.statics.delete = function(req, cb) {
    this.remove({_id: req.params.id},
        (err, result) => {
            if (err) return console.log(err);
            cb(result);
        }
    )
}


CompanySchema.statics.removeAll = function(req, cb) {
    this.remove(
        (err, result) => {
            if (err) return console.log(err);
            cb(result);
        }
    )
}






let Company = mongoose.model('Company', CompanySchema);

// let newCompany = new Company({
//     name: 'Elium Academy',
//     // mentor: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
//     description: 'Coding Bootcamp',
//     address: {
//         streetName : 'Science Road',
//         streetNumber : 23,
//         postCode : 1000,
//         locality : 'Brussels',
//         city : 'Brussels',
//         country : 'Belgium',
//     }, 
//     status: 'Active',
//     website: 'www.elium.academy',
//     socialmedia: {
//         twitter: 'twitter.co/elium-academy',
//         facebook: 'facebook.com/elium-academy',
//         linkedin: 'linkedin.com/elium-academy',
//         youtube: 'youtube.com/elium-academy',
//         instagram: 'instagr.am/elium-academy'
//     },
//     // spokePerson : { type: Schema.Types.ObjectId, ref: 'Person' },
//     // team: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
//     sector: ['Full Stack' , 'Growth Hack' , 'Education' , 'Bootcamp'],
//     skills: ['Web Developement' , 'Entrepreneurship' ],
//     onSite : true,
//     news: 'Raised 500.000 from the governement for giving quality education',
//     pitch: 'Become Full Stack Web Developer in 13 weeks!*',
//     lastUpdate : new Date("2016-12-25"),
//     // partners: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
//     fundRaised: 800000
// });

// newCompany.save(function(err) {
//   if (err) throw err;
//   console.log('StartUp saved successfully!');
// });


module.exports = CompanySchema;