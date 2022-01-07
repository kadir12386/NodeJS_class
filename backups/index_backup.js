// const express = require("express");

import express from "express"; //"type" :"module"
// import { MongoClient } from "mongodb"; //"type" :"module"

const app = express();

const movies = [
  {
    id: "101",
    name: "M.S. Dhoni",
    pic: "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    des: "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
    rating: "7.9",
    trailer: "https://www.youtube.com/embed/6L6XqWoS8tw",
    language: "tamil",
  },
  {
    id: "102",
    name: "The Walk",
    pic: "https://images-na.ssl-images-amazon.com/images/I/81iXs0dZn2L.jpg",
    des: "Philippe Petit, a French street performer, dreams of performing daring stunts. He attempts to walk between the Twin Towers of the World Trade Center in New York on a tightrope.",
    rating: "7.9",
    trailer: "https://www.youtube.com/embed/GR1EmTKAWIw",
    language: "english",
  },
  {
    id: "103",
    name: "Avengers: Endgame",
    pic: "https://images.moviesanywhere.com/4677177f6f0595289bc3e767e7b47459/1d6c6c73-ab1e-4453-969c-6a4e965ebb37.jpg",
    rating: "8.4",
    des: "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars.",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    language: "english",
  },
  {
    id: "104",
    name: "127 Hours",
    pic: "https://m.media-amazon.com/images/M/MV5BMTc2NjMzOTE3Ml5BMl5BanBnXkFtZTcwMDE0OTc5Mw@@._V1_.jpg",
    rating: "7.5",
    des: "Aron Ralston, a mountain climber, is on a hiking adventure in Utah when he gets trapped in a canyon. Soon, he takes desperate measures to survive and struggles for 127 hours before he is rescued.",
    trailer: "https://www.youtube.com/embed/OlhLOWTnVoQ",
    language: "english",
  },
  {
    id: "105",
    name: "Master11",
    pic: "https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
    des: "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities good.",
    rating: "8",
    trailer: "https://www.youtube.com/embed/UTiXQcrLlv4",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
    language: "tamil",
  },
  {
    name: "Maanaadu",
    pic: "https://assets.voxcinemas.com/posters/P_HO00008659.jpg",
    des: "On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer become stuck in a time loop.",
    rating: "9.1",
    trailer:
      "https://www.123coimbatore.com/cinema/uploads/movies/450-2021021711465349381_New_Project_(7).jpg",
    id: "106",
    poster:
      "https://www.123coimbatore.com/cinema/uploads/movies/450-2021021711465349381_New_Project_(7).jpg",
    language: "tamil",
  },
];

// // MongoClient
// async function CreateConnection() {
//   const client = new MongoClient();
//   await client.connect(); // this gives promise
//   console.log("MongoDB connected");
//   return client;
// }
// const client = await CreateConnection();

const PORT = 9000;
app.get("/", (request, response) => {
  response.send("Hello **** !!!");
});

app.get("/movies", (request, response) => {
  console.log(request.query);
  const { language, rating } = request.query;
  let filteredMovies = movies;
  if (language) {
    filteredMovies = filteredMovies.filter((mv) => mv.language === language);
  }
  if (rating) {
    filteredMovies = filteredMovies.filter((mv) => mv.rating === rating);
  }
  response.send(filteredMovies);
});
//movies using id
//===> /movies/:id
// app.get("/movies/:id", (request, response) => {
//   const { id } = request.params;
//   console.log(id);
//   const [result] = movies.filter((mv) => mv.id === id);
//   response.send(result);
// });

//when we type wrong number(id) it sholud show no movies avaiable.
app.get("/movies/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  const NotFound = { message: "Movies not Found" };
  const [result] = movies.filter((mv) => mv.id === id);
  console.log(result);
  // result ? response.send(result) : response.send({ msg: "Movies not Found" });
  result ? response.send(result) : response.send(NotFound);
});

app.listen(PORT, () => console.log("The server is started", PORT));

// for crud operation in browser we use only express
// for crud operation in mongo we use express and mongodb
// both express mongodb third-party package.
