const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const exphbs = require('express-handlebars');
const port = (process.env.PORT || 3000);
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const searchRoutes = require("./routes/search");
const moodRoutes = require("./routes/mood");
const liveRoutes = require("./routes/live");

// tell express to process the html files with handlebars
app.engine('html', exphbs({
    defaultLayout: 'default',
    extname: '.html'
}));

// set jade as view engine
app.set("view engine", "handlebars");
// specify the views folder
app.set("views", path.join(__dirname, "./views"));

// use a middleware to deserialize request body
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// configure the public directory
app.use(express.static(path.join(__dirname, "./public")));

io.on('connection', function(socket) {
    console.log('connected');
});

app.use("/search", searchRoutes);
app.use("/mood", moodRoutes);
app.use("/live", liveRoutes(io));

// Handle errors
app.use(function(err, req, res, next) {
  console.error(err);
  res.status(500).send(err.message);
});

http.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
});
