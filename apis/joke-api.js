// not working

// const express = require("express");
// const https = require("https");

// // jokeApi

// const jokeurl =
//   "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=twopart";

// var jokeQuestion;
// var jokeAnswer;

// function getJokes(jokeQ, jokeA) {
//   jokeQuestion = jokeQ;
//   jokeAnswer = jokeA;
//   console.log("At getjokes");
//   console.log(jokeQuestion);
//   console.log(jokeAnswer);
// }

// function delay() {
//   // `delay` returns a promise
//   return new Promise(function (resolve, reject) {
//     // Only `delay` is able to resolve or reject the promise
//     setTimeout(function () {
//       resolve(42); // After 3 seconds, resolve the promise with value 42
//     }, 3000);
//   });
// }

// // async function getJokes() {
// //   const jokeResponse = await https.get(jokeurl, function (response) {
// //     console.log("jokeApi Status code:" + response.statusCode);
// //     response.on("data", function (data) {
// //       var jokeData = JSON.parse(data);
// //       //   res.send(jokeData);
// //       // console.log(jokeData);
// //       var jokeQ = jokeData.setup;
// //       var jokeA = jokeData.delivery;

// //       var jokeQA = [jokeQ, jokeA];
// //       //   console.log(jokeQA);
// //       //   console.log(jokeQ);
// //     });
// //   });
// //   await delay();
// //   var jokeQA = jokeQ;
// //   return jokeQA;
// // }

// // // var jokes = getJokes(jokeurl);

// // (async function () {
// //   let jokes = await getJokes();
// //   console.log(jokes);
// // })();

// https.get(jokeurl, function (response) {
//   console.log(response.statusCode);
//   response.on("data", function (data) {
//     const jokeData = JSON.parse(data);
//     //   res.send(jokeData);
//     // console.log(jokeData);
//     const jokeQ = jokeData.setup;
//     const jokeA = jokeData.delivery;
//     // console.log("At https");
//     // console.log(jokeQ);

//     getJokes(jokeQ, jokeA);

//     // module.exports = jokeQ;
//     // module.exports = jokeA;
//   });
// });

// setTimeout(() => (module.exports = jokeQuestion), 3000);
// // console.log(jokeQuestion);
// // console.log(jokeAnswer);

// // module.exports = jokeQuestion;
