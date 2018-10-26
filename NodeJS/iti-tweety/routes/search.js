const express = require('express');
const router = express.Router();
const twitterService = require("../services/TwitterService");

 /**
 * Return the page
 */
router.get("/", (req, resp)=> {
    resp.render("search.html");
});

/**
 * extract the token from the body
 * search for tweets with the token
 * return the data with the page
 * the page needs { token: string }
 */
router.post("/", (req, resp, next) => {
    const token = req.body.token;
    // TODO
    // search the token with the twitterService
    // render the search.html page with the token and an array of tweets
});

module.exports = router;
