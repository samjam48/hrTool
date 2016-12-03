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
			cb(result);
    })
}

// // REDUNDANT METHOD
// PersonSchema.statics.create = function(req, cb){
//     return Person.save(req.body, (err, result) => {
//         if (err) return console.log(err);
//         cb(result);
//     })
// }

PersonSchema.statics.findItem = function(req, cb){
    this.findById( req.params.id , (err, result) =>{
        if (err) return console.log(err);
        cb(result);
    })
}

PersonSchema.statics.makeUpdate = function(req, cb){ 
    this.update({_id: req.params.id},
        {$set:{
            name: req.body.name,
            gender: req.body.gender,
            location: req.body.location,
            website: req.body.website,
            socialmedia: {
                twitter: req.body.twitter,
                facebook: req.body.facebook,
                linkedin: req.body.linkedin,
                youtube: req.body.youtube,
                instagram: req.body.instagram,
            },
            workingAt : [{ type: Schema.Types.ObjectId, ref: 'Company' }],
            daysPerWeek: req.body.daysPerWeek,
            role: req.body.role,
            isMentor: req.body.isMentor,
            menteeList: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
            skills: {
                mainSkills: req.body.mainSkills,
                skills: req.body.skills,
            },
            organizations: [{ type: Schema.Types.ObjectId, ref: 'Company' }]
        }},
        (err, result) => {
            if (err) return console.log(err);
            cb(result);
        }
    )
}

PersonSchema.statics.delete = function(req, cb) {
    this.remove({_id: req.params.id},
        (err, result) => {
            if (err) return console.log(err);
            cb(result);
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


module.exports = PersonSchema
