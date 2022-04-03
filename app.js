const express = require("express");
const https = require("https");
// const bodyParser = require("body-parser");
// const JokeAPI = require("sv443-joke-api");

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/jokes", function (req, res) {
  const url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=twopart";
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const jokeData = JSON.parse(data);
      //   res.send(jokeData);
      console.log(jokeData);
      const jokeQ = jokeData.setup;
      const jokeA = jokeData.delivery;
      //   console.log(jokeQ);

      res.set("Content-Type", "text/html");
      res.write(`<h3> Q: ${jokeQ} </h3> </br>`);
      res.write("<h3>A:" + jokeA + "</h3>");
      //   res.write(`<h2> The weather in is currently ${jokeQ}</h2>`);
      //   res.write("<h3>The Weather is currently " + jokeQ + "</h3>");
      res.send();
    });
  });
});

app.post("/quotes", function (req, res) {
  const url = "https://api.kanye.rest/";
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const quoteData = JSON.parse(data);
      //   res.send(quoteData.quote);
      console.log(quoteData);
      //   const jokeQ = jokeData.setup;
      //   const jokeA = jokeData.delivery;
      //   console.log(jokeQ);

      res.set("Content-Type", "text/html");
      res.write(`<h3> ${quoteData.quote} </h3> </br>`);
      //   res.write("<h3>A:" + jokeA + "</h3>");
      res.send();
    });
  });
});

app.post("/wallpapers", function (req, res) {
  //   res.send("Hello");
  const imgurl = "https://random.imagecdn.app/500/150";
  res.set("Content-Type", "text/html");
  res.write("<img src=" + imgurl + ">");
  res.send();
});

app.listen(3000, function () {
  console.log("App running at 3000");
});
