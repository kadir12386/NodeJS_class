import express from "express";

const app = express();
const movies = [
  {
    id: "100",
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
    language: "telugu",
  },
  {
    id: "101",
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    language: "english",
  },
];

const PORT = 9000;

app.get("/", (request, response) => {
  response.send("Hello,  2022 😍💪 !! ");
});
//filtering
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
//1. type the id it will give as the result
//2. if the id is wrong it will give as the "movies not Found" msg
//when we type the wrong number(id) it should show no movies available.
// ===>path ==> /movies/:id
app.get("/movies/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  const NotFound = { message: "Movies not Found" };
  const [result] = movies.filter((mv) => mv.id === id);
  console.log(result);
  result ? response.send(result) : response.send(NotFound);
});

app.listen(PORT, () => console.log("The Server is started", PORT));
