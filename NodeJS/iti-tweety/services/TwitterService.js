const Twitter = require("twitter");
const Promise = require("bluebird");

class TwitterService {
    constructor() {
        this.client = new Twitter({
            consumer_key: '4JKn7lsDRkX3Mcv1GKUuHSbsU',
            consumer_secret: 'BYqKayRZ9vngImVGEI1Z8EKH9ci3jOuznMrXO534ron5OP8hNh',
            access_token_key: '2308123574-G0L6CoLtAN6rnVDVfefxTx3Yg9M29QHsMJYR9Iy',
            access_token_secret: 'pLf73gFBpijYF4fqh6zTbULKGYZ5ErHbus5CgiVH0dedA'
        });
    }

    /**
     * Search tweets for the given token
     * @param the token
     * @returns a Promise with the result
     */
    search(token) {
        // TODO: return a promise with the result
        this.client.get('search/tweets', { q: token, count: 100, result_type: 'mixed' },  function( err, tweets, response ){
            return new Promise((resolve, reject) => {
                
            })
        });
    }

    on(token, callback) {
        this.dispose();
        this.stream = this.client.stream('statuses/filter', { track: token });
        this.stream.on('data' /**,  TODO  **/);
    }

    dispose() {
        if (this.stream) {
            let d = this.stream.destroy();
        }
    }
}

module.exports = new TwitterService();
