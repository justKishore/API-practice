// import imgurl from "./api.js";
const imgurl = require("./apis/image-api.js");
const jokeQuestion = require("./apis/joke-api.js");
console.log(jokeQuestion);
// const jokeA = require("./apis/joke-api.js");
const express = require("express");
// import express from "express";
const https = require("https");
// import * as https from "http";

// const bodyParser = require("body-parser");
// const JokeAPI = require("sv443-joke-api");

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/jokes", function (req, res) {
  res.set("Content-Type", "text/html");
  res.write(`<h3> Q: ${jokeQuestion} </h3> </br>`);
  // res.write("<h3>A:" + jokeA + "</h3>");
  res.send();
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
  //   const imgurl = "https://random.imagecdn.app/500/150";
  res.set("Content-Type", "text/html");
  res.write("<img src=" + imgurl + ">");
  res.send();
});

app.listen(3000, function () {
  console.log("App running at 3000");
});
