const router = require("express").Router();
const { query } = require("express");
const fetch = require("node-fetch");

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
