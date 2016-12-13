const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let CompanySchema = new Schema({
    name: String,
    mentor: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    description: String,
    location: String, 
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
    this.find( {}, (err, result) => {
            if (err) throw err;
			cb(err, result);
    })
}

CompanySchema.statics.findCompany = function(req, cb){
    this.findById( req, (err, result) => {
        if (err) return console.log(err);
        cb(err, result);
    })
}


CompanySchema.statics.delete = function(req, cb) {
    this.remove({_id : req}, (err, result) => {
            if (err) return console.log(err);
            cb(err, result);
    })
}


CompanySchema.statics.removeAll = function(cb) {
    this.remove((err, result) => {
        if (err) return console.log(err);
        cb(err, result);
    });
}


module.exports = mongoose.model('Company', CompanySchema);