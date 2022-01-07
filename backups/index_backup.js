// const express = require("express");
import express from "express"; //"type" :"module"
import { MongoClient } from "mongodb"; //"type" :"module"
import dotenv from "dotenv";
dotenv.config();

const app = express();
//middleware
app.use(express.json()); //Intercept every request
// what this middleware does ?
//It converts all the request and then it passes to body
//this is express in-bulit one..

// const MONGO_URL = "mongodb://localhost";

const MONGO_URL = process.env.MONGO_URL;
// MongoClient
async function CreateConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect(); // this gives promise
  console.log("MongoDB connected");
  return client;
}
const client_fun_called = await CreateConnection();

const PORT = 9000;
app.get("/", (request, response) => {
  response.send("Hello **** !!!");
});
//===================================================================
// app.get("/movies", (request, response) => {
//   console.log(request.query);
//   const { language, rating } = request.query;
//   let filteredMovies = movies;
//   if (language) {
//     filteredMovies = filteredMovies.filter((mv) => mv.language === language);
//   }
//   if (rating) {
//     filteredMovies = filteredMovies.filter((mv) => mv.rating === rating);
//   }
//   response.send(filteredMovies);
// });
//===========shortcut of filtering==========
app.get("/movies", async (request, response) => {
  // const filter = request.query;
  // if (filter.rating) {
  //   filter.rating = +filter.rating;
  // }
  const movie = await client_fun_called
    .db("b251we")
    .collection("movies")
    .find(request.query)
    .toArray(); //Cursor is Pagination -> returns 20 documents
  console.log(movie);
  response.send(movie);
});

//=============================Creasting Movies using "Post" Method instering the data to Mongodb in local======================================
app.post("/movies", async (request, response) => {
  const data = request.body; // THIS giving data from body for post
  const result = await client_fun_called
    .db("b251we")
    .collection("movies")
    .insertMany(data);
  response.send(result);
});
//===================================================================
//movies using id
//===> /movies/:id

// //when we type wrong number(id) it sholud show no movies avaiable.
// app.get("/movies/:id", (request, response) => {
//   const { id } = request.params;
//   console.log(id);
//   const NotFound = { message: "Movies not Found" };
//   const [result] = movies.filter((mv) => mv.id === id);
//   console.log(result);
//   result ? response.send(result) : response.send(NotFound);
// });

app.get("/movies/:id", async (request, response) => {
  const { id } = request.params;
  const movie = await client_fun_called
    .db("b251we")
    .collection("movies")
    .findOne({ id: id });
  console.log(movie);
  movie
    ? response.send(movie)
    : response.status(404).send({ msg: "movie not found" });
});

app.listen(PORT, () => console.log("The server is started", PORT));
