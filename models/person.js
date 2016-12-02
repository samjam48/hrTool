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

PersonSchema.statics.findOne = function(req, cb){
    this.findById( id, (err, result) =>{
        if (err) return console.log(err);
        cb(result);
    })
}

PersonSchema.statics.update = function(req, cb){ 
    this.Update({_id: req.params.id},
        {$set:{
            name	  : req.body.name,
            birthdate : req.body.birthdate,
            health	  : req.body.health
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



// ---------------------------------- BASIC TESTING STUFF - REMOVE WHEN ABLE TO ADD USER NORMALLY ----------------------------------------


let Person = mongoose.model('Person', PersonSchema);

var  newperson = new Person ({ 
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
    skills: {
        mainSkills: [ "mainSkillsTest", "mainSkillsTest", "mainSkillsTest"],
        skills: [ "skillsTest", "skillsTest", "skillsTest", "skillsTest", "skillsTest"],
}})
console.log(newperson)

newperson.save(function(err) {
  if (err) throw err;
  console.log('User saved successfully!');
});

