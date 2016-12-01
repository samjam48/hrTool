const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

var CompanySchema = new Schema({
    name: String,
    mentor: String,
    description: String,
    address: String,
    status: String,
    website: String,
    twitter: String,
    facebook: String,
    linkedin: String,
    instagram: String,
    youtube: String,
    


})

module.exports = mongoose.model('Book', BookSchema)