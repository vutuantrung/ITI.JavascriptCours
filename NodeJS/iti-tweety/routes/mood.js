const express = require('express');
const router = express.Router();
const twitterService = require("../services/TwitterService")
const SentimentService = require("../services/SentimentService");

 /**
 * Return the page
 */
router.get("/", (req, resp) => {
    // TODO
});

/**
 * extract the token from the body
 * search for tweets with the token
 * compute the sentiment score for ALL the 100 tweets
 * Choose the right picture to send
 * return the data with the page
 * the page needs { token: string, imgSrc: string, score: number }
 */
router.post("/", (req, resp) => {
   // TODO
});

module.exports = router;