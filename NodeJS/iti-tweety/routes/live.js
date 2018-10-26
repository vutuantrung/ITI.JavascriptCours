const express = require('express');
const router = express.Router();
const twitterService = require("../services/TwitterService")

function live(io) {
    /**
     * Return the page
     */
    router.get("/", (req, resp) => {
        // TODO
    });

    /**
     * extract the token from the body
     * listen on the token
     * use socket to emit new stream results
     * the page needs { token: string }
     */
    router.post("/", (req, resp) => {
        const token = req.body.token;
        // TODO send real time tweets
        resp.render("live.html", {
            token
        });
    });

    return router;
}

module.exports = live;
