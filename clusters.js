const express = require("express");
const app = express();

//requiring middleares
const favicon = require("serve-favicon");
const path = require("path");
const RateLimit = require("express-rate-limit");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");

//requiring quotes
const quotes = require("./data/quotes/general/quote.json");
const movieQuotes = require("./data/quotes/general/movieQuotes.json");
const gandhi = require("./data/quotes/specific-people/gandhi.json");
const sunztu = require("./data/quotes/specific-people/sunztu.json");
const aristotle = require("./data/quotes/specific-people/aristotle.json");
const bigBangTheory = require("./data/quotes/movies-and-tv/bigbangtheory.json");
const gameOfThrones = require("./data/quotes/movies-and-tv/game-of-thrones.json");
const starwarsQuotes = require("./data/quotes/movies-and-tv/starwars-quotes.json");
const theOffice = require("./data/quotes/movies-and-tv/theOffice.json");
const plato = require("./data/quotes/specific-people/plato.json");
const einstein = require('./data/quotes/specific-people/einstein.json')
const alexander = require('./data/quotes/specific-people/alexander-the-great.json')
const adamSmith = require('./data/quotes/specific-people/adam-smith.json')
const laoZi = require('./data/quotes/specific-people/Lao-zi.json')
const confucius = require('./data/quotes/specific-people/confucius.json')

app.use(express.static("public"));

//middle wares
app.use(favicon(path.join(__dirname, "public", "images", "favicon-32x32.png")));
app.use(morgan("common"));
app.use(compression());
app.use(helmet());
const apiLimiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: "You send to many requests please try again later",
});
app.use("/api/", apiLimiter);

let port = 3000 || process.ENV.port;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", function (req, res) {
  res.render("index.ejs");
});


//quotes
app.get("/api/quotes/gandhi", function (req, res) {
  res.json({
    quote: `${gandhi[Math.floor(Math.random() * gandhi.length)]}`,
  });
});

app.get("/api/quotes/sunztu", function (req, res) {
  res.json({
    quote: `${sunztu[Math.floor(Math.random() * sunztu.length)]}`,
  });
});

app.get("/api/quotes/aristotle", function (req, res) {
  res.json({
    quote: `${aristotle[Math.floor(Math.random() * aristotle.length)]}`,
  });
});

app.get("/api/quotes/einstein", function (req, res) {
  res.json({
    quote: `${einstein[Math.floor(Math.random() * einstein.length)]}`,
  });
});

app.get("/api/quotes/plato", function (req, res) {
  res.json({
    quote: `${plato[Math.floor(Math.random() * plato.length)]}`,
  });
});

app.get("/api/quotes/alexander-the-great", function (req, res) {
  res.json({
    quote: `${alexander[Math.floor(Math.random() * alexander.length)]}`,
  });
});

app.get("/api/quotes/adam-smith", function (req, res) {
  res.json({
    quote: `${adamSmith[Math.floor(Math.random() * adamSmith.length)]}`,
  });
});

app.get("/api/quotes/laozi", function (req, res) {
  res.json({
    quote: `${laoZi[Math.floor(Math.random() * laoZi.length)]}`,
  });
});

app.get("/api/quotes/confucius", function (req, res) {
  res.json({
    quote: `${confucius[Math.floor(Math.random() * confucius.length)]}`,
  });
});


//random
app.get("/api/quotes/random", function (req, res) {
  res.send(quotes[Math.floor(Math.random() * quotes.length)]);
});

//movies and tv
app.get("/api/quotes/movie-quotes", function (req, res) {
  res.send(movieQuotes[Math.floor(Math.random() * movieQuotes.length)]);
});

app.get("/api/quotes/big-bang-theory", function (req, res) {
  res.send(bigBangTheory[Math.floor(Math.random() * bigBangTheory.length)]);
});

app.get("/api/quotes/game-of-thrones", function (req, res) {
  res.send(gameOfThrones[Math.floor(Math.random() * gameOfThrones.length)]);
});

app.get("/api/quotes/star-wars", function (req, res) {
  res.send(starwarsQuotes[Math.floor(Math.random() * starwarsQuotes.length)]);
});

app.get("/api/quotes/the-office", function (req, res) {
  res.send(theOffice[Math.floor(Math.random() * theOffice.length)]);
});

module.exports = app;