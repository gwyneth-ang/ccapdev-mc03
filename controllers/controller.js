const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const controller = {

    getFavicon: function (req, res) {
        res.status(204);
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/`. This displays `home.hbs` with all contacts
            current stored in the database.
    */
    getIndex: function(req, res) {
        // your code here
        
        db.findMany(User,{}, 'name number', function(resp){
            res.render('home',{
                contacts: resp
            }); // This is to load the page initially
        })
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getCheckNumber`. This function checks if a
            specific number is stored in the database. If the number is
            stored in the database, it returns an object containing the
            number, otherwise, it returns an empty string.
    */
    getCheckNumber: function(req, res) {
        // your code here
        db.findOne(User, {number: Number(req.query.number)}, 'name number', function (result) {
            res.send(result);
        });
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getAdd`. This function adds the contact sent
            by the client to the database, then appends the new contact to the
            list of contacts in `home.hbs`.
    */
    getAdd: function(req, res) {
        // your code here
        console.log(req.query)
        db.insertOne(User,{name:req.query.name ,number: Number(req.query.number)}, function(resp){
            res.render('user', { name: 'Tobi' }, function (err, html) {})
        })
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getDelete`. This function deletes the contact
            from the database, then removes the contact to the list of
            contacts in `home.hbs`.
    */
    getDelete: function (req, res) {
        // your code here
        var number = Object.keys(req.query)
        // console.log(Number(number));
        db.deleteOne(User, {number: Number(number)}, function(){})
    }

}

module.exports = controller;
