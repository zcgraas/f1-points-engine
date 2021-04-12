module.exports = function getPoints(req, res, next) {
  let points = req.query.points;
  let season = req.query.season;

  switch (points.length) {
    case 10:
      console.log("Fastest Lap missing, assumed 0");
    case 11:
      let seasonPoints = {};

      for (race in season) {
        race.map(r, (index) => {
          if ((index = race.length - 1)) {
            //TODO give points to fastest lap
            seasonPoints = {
              ...seasonPoints,
              [r]: (seasonPoints[r] += points[index]),
            };
          } else {
            seasonPoints = {
              ...seasonPoints,
              [r]: (seasonPoints[r] += points[index]),
            };
          }
        });
      }
      res.json(seasonPoints);

    default:
      return res.json({ error: "invalid points array" });
  }

  return res.json({ points: req.query.points });
};
