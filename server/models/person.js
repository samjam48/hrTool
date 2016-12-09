const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;


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
    menteeList: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    skills: {
        mainSkills: Array,
        skills: Array,
    },
    organizations: [{ type: Schema.Types.ObjectId, ref: 'Company' }]
}, { collection: 'persons' })
    // extras?
        // dob: date,
        // joined: date
        


PersonSchema.statics.all = function(cb){
    this.find( {}, function(err, result) {
            if (err) throw err;
			cb(err, result);
    })
}


PersonSchema.statics.findItem = function(req, cb){
    this.findById( req , (err, result) =>{
        if (err) return console.log(err);
        cb(err, result);
    })
}


PersonSchema.statics.delete = function(req, cb) {
    this.remove({_id: req},
        (err, result) => {
            if (err) return console.log(err);
            cb(err, result);
        }
    )
}


PersonSchema.statics.removeAll = function(req, cb) {
    this.remove(
        (err, result) => {
            if (err) return console.log(err);
            cb(result);
        }
    )
}


module.exports = mongoose.model('Person', PersonSchema);