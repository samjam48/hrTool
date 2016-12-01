const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

var CompanySchema = new Schema({
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
    skillsTags: [String],
    onSite : Boolean,
    news: String,
    pitch: String,
    lastUpdate : Date,
    partners: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
    fundRaised: Number

})

module.exports = mongoose.model('Company', CompanySchema)