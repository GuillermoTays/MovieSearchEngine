const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/", (req, res) => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGEzNGRiNTk3NThlMWQxOWFkNzI3OGVkZWRlM2RiYiIsInN1YiI6IjY1MTZjNWExOTY3Y2M3MDEzOWQ5MGE5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xXcRajXHUDEGIPVR5-1ili7uVraGfS_K6iPsB4Y9RtE",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => res.json(json))
    .catch((err) => console.error("error:" + err));
});

router.get("/:query", (req, res) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=00a34db59758e1d19ad7278edede3dbb&query=${req.params.query}&include_adult=false&language=en-US&page=1`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => res.json(json))
    .catch((err) => console.error("error:" + err));
});

module.exports = router;
