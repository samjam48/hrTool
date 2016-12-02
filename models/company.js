const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('../configurations/db.js');

let CompanySchema = new Schema({
    name: String,
    mentor: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    description: String,
    address: String, //could be an obj
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

let Company = mongoose.model('Company', CompanySchema);

let Elium = new Company({
    name: 'Elium Academy'
});

Elium.save(function(err) {
  if (err) throw err;
  console.log('StartUp saved successfully!');
});


module.exports = {
	all: function(cb){
		Company.find('companies', {}, (err, result) => {
            if (err) throw err;
			cb(result);
            console.log(result);
        });
	},
	findOne: function(req, cb){
		Company.findOne({_id: ObjectID(req.params.id)}, (err, result) =>{
			if (err) 
                return console.log(err);
			cb(result);
		})
	},
	create: function(req, cb){
		return Company.save(req.body, (err, result) => {
			if (err) return console.log(err);
			cb(result);
		})
	},
	update: function(req, cb){ 
		Company.findOneAndUpdate({_id: ObjectID(req.params.id)},
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
        Company.findOneAndDelete({_id: ObjectID(req.params.id)},
            (err, result) => {
                if (err) return console.log(err);
                cb(result);
            }
        )
    },
    removeAll: function(req, cb) {
        Company.remove(
            (err, result) => {
                if (err) return console.log(err);
                cb(result);
            })
    }
}