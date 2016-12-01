const mongoose    = require('mongoose');

// var db = 

	// online server if desired 'mongodb://sam:password@ds053176.mlab.com:53176/node1es1'
var db = mongoose.connect('mongodb://sam:password@ds053176.mlab.com:53176/node1es1')

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('were connected!')
});
// , function(err, database) {  // Use connect method to connect to the server
// 	if (err) return console.log(err);
//     PersonDb = database.collection('persons');
//     CompanyDb = database.collection('persons');
// });