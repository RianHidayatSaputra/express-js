var express = require('express');
var router = require('express').Router();
const User = require('./models/User');
const db = require('./config/db');

router.post('/login', async (req, res) => {

    const check = await User.findOne({ email,password });
    var email = req.body.email;
	var password = req.body.password;

	if (email && password) {
		db.query('SELECT * FROM user WHERE email = "'+ email +'" AND password = "'+ password +'"');

			if (email == check.email && password == check.password) {

				req.session.user = req.body.email;
				res.status(200).redirect('/dashboard');
			} else {
				res.status(401).send('Invalid Email Or Password!');
			}			
			res.end();
		} else {
            res.status(404).send('Please enter Email and Password!');
            res.end();
	}

});

router.get('/register', async (req, res) => {
    res.status(200).render('register');
});

router.get('/logout', async (req, res) => {
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
            res.status(500).send('Error!');
        }else (
            res.status(200).redirect('/')
        )
    });
});

module.exports = router;