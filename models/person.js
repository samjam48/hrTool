const Mongo       = require('mongodb');
// const MongoClient = require('mongodb').MongoClient
// const ObjectID    = Mongo.ObjectID
const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;


let Person
// connect to the database		// user: sam, pwrd: password
	// online server if desired 'mongodb://sam:password@ds053176.mlab.com:53176/node1es1'

mongoose.connect('mongodb://sam:password@ds053176.mlab.com:53176/node1es1', function(err, database) {  // Use connect method to connect to the server
	if (err) return console.log(err);
    Person = database.collection('persons');
});




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
    role: String,
    author: String,
    category: String,
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
})


// extras?
    // dob: date,
    // joined: date,
    

module.exports = mongoose.model('Person', PersonSchema);



module.exports = {
	all: function(cb){
		Person.find().toArray((err, result) =>{
			if (err) return console.log(err);
			cb(result);
		})
	},
	findOne: function(req, cb){
		Person.findOne({_id: ObjectID(req.params.id)}, (err, result) =>{
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
		Person.findOneAndUpdate({_id: ObjectID(req.params.id)},
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
        Person.findOneAndDelete({_id: ObjectID(req.params.id)},
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