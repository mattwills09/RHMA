const db = require("../models/user");

const User = require("../models/user");
const passport = require("../passport");
const express = require("express");
const router = express.Router();


module.exports = {


    // USER SIGN-UP ====================
    create: function(req, res) {
        db.User.create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));

        // router.post("/", (req, res) => {
            console.log("User Sign Up");

        const { username, password } = req.body
        //validation: =====================
        User.findOne({ username: username }, (err, user) => {
            if (err) {
                console.log("User.js post error: ", err)
            } else if (user) {
                res.json({
                    error: "User already exists with username!"
                })
                console.log("222User.js post error: ", err)
            } else { const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err)
                    return res.json(err)
                    res.json(savedUser)
            })
            console.log("3333User.js post error: ", err)
            }
        })

    },

    // USER LOG-IN ====================
    post: function(req, res) {
        db.User.post(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));

        // router.post("/api/login", function(req, res, next) {
        //     console.log("routes/user.js, login, req.body: ");
        //     console.log(req.body)
        //     next()
        // },

        passport.authenticate("local", function (req, res, error, user, info) {
// will execute each time, if strategy finds an error, will log to console
            console.log(error);
            console.log(user);
            console.log(info);
                if (error) {
                    res.status(401).send(error);
                } else if (!user) {
                    res.status(401).send(info);
                } else {
                    next();
                }
                res.status(401).send(info);

        }),
            (req, res) => {
                console.log("logged in", req.user);
                var userInfo = {
                    username: req.user.username
                };
                res.send(userInfo);
            };

    },

    // USER GET ====================
    get: function(req, res) {
        db.User.findOne(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));

        // router.get("/", (req, res, next) => {
            console.log(req.user);

            if (req.user) {
                res.json({
                    user: req.user
                })
            } else {
                res.json({
                    user: null
                })
            }

    },
    
    // USER LOG OUT ====================
    logout: function(req, res) {
        db.User.findOne(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));

        // router.post("/logout", (req, res) => {
            if (req.user) {
                req.logout()
                res.send({
                    message: "Logging Out.."
                })
            } else {
                res.send({
                    message: "No User To Log Out."
                })
            }
        
    },

    login: function(req, res) {
        db.User.findOne(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.User.update(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }

}