const mongoose    = require('mongoose');


	// online sandbox server =  'mongodb://user:password@ds119608.mlab.com:19608/hrtool'
    // offline server        =  ...

mongoose.connect('mongodb://user:password@ds119608.mlab.com:19608/hrtool')
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('were connected!')
});



// var dbCollection = db.collection('persons');

// console.log(dbCollection)

// , function(err, database) {  // Use connect method to connect to the server
// 	if (err) return console.log(err);
//     PersonDb = database.collection('persons');
//     CompanyDb = database.collection('persons');
// });