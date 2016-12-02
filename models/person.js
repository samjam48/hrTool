// const Mongo       = require('mongodb');
// const MongoClient = require('mongodb').MongoClient
// const ObjectID    = Mongo.ObjectID
const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

require("../configurations/db.js")


let PersonDb


let PersonSchema = new Schema({
    name: String,
    gender: String,
    location: String,
    website: String,
    socialmedia: {
        twitter: String,
        facebook: String,
        linkedin: String,
        youtube: String,
        instagram: String
    },
    workingAt : [{ type: Schema.Types.ObjectId, ref: 'Company' }],
    daysPerWeek: Number,
    role: String,
    isMentor: Boolean,
    menteeList: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
    skills: {
        mainSkills: Array,
        skills: Array,
    },
    organizations: [{ type: Schema.Types.ObjectId, ref: 'Company' }]
}, { collection: 'persons' })
    // extras?
        // dob: date,
        // joined: date
        

let Person = mongoose.model('Person', PersonSchema);

var  newperson = new Person ({ name: 'Pedro' })
console.log(newperson)



newperson.save(function(err) {
  if (err) throw err;
  console.log('User saved successfully!');
});



module.exports = {
	all: function(cb){
		Person.find('persons', {}, function(err, result) {
            if (err) throw err;
			cb(result);

            // object of all the users
            console.log(result);
        });
	},
	findOne: function(req, cb){
		Person.findById( req.params.id, (err, result) =>{
			if (err) return console.log(err);
			cb(result);
		})
	},
	create: function(req, cb){
		return Person.save(req.body, (err, result) => {
			if (err) return console.log(err);
			cb(result);
		})
	},
	update: function(req, cb){ 
		Person.Update({_id: req.params.id},
			{$set:{
				name	  : req.body.name,
				birthdate : req.body.birthdate,
				health	  : req.body.health
			}},
			(err, result) => {
				if (err) return console.log(err);
				cb(result);
		})
	},
	delete: function(req, cb) {
        Person.remove({_id: req.params.id},
            (err, result) => {
                if (err) return console.log(err);
                cb(result);
            }
        )
    },
    removeAll: function(req, cb) {
        Person.remove(
            (err, result) => {
                if (err) return console.log(err);
                cb(result);
            })
    }
}