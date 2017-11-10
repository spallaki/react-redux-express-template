const express = require('express');
const router = express.Router();
const User = require('../models').User;
// const Post = require('../models').Post;

// YOUR API ROUTES HERE
module.exports = (passport) => {
    router.post('/register', (req, res) => {
        User.create({
            username: req.body.username,
            password: req.body.password
        })
    .then((user) => {
        res.json({ username: user.username, points: user.points });
    });
    });

    router.post('/login', passport.authenticate('local'), (req, res) => {
        res.json({ username: req.user.username, points: req.user.points });
    });

    router.get('/logout', (req, res) => {
        req.logout();
        res.json({ success: true });
    });

    router.get('/user', (req, res) => {
        if(req.user) {
            res.json({username: req.user.username, points: req.user.points});
        } else {
            res.status(400).json({ error: "User is not logged in"});
        }
    });

    router.get('/:username', (req, res) => {
        User.findOne({
            where: { username: req.params.username }
        })
  .then((user) => {
      res.json({ username: user.username, points: user.points});
  });
    });

    return router;
};
