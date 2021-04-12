module.exports = function calculate(req, res, next) {
  let points = req.query.points;

  if (points.length) return res.json({ points: req.query.points });
};

// fetch("localhost:8080/points", {
//   method: "GET",
//   body: { points: [8, 6, 4, 3, 2, 0, 0, 0, 0, 0, 1] },
//   redirect: "follow",
// })
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));
