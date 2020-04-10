
var mongoose = require('mongoose');

/*
    TODO:   Complete the UserSchema which will contain the name and the
            number of contacts in the database.
*/

var UserSchema = new mongoose.Schema({
    // your code here
    name:{type:String, trim:true},
    number: {type:Number, min:0}
});

module.exports = mongoose.model('User', UserSchema);
