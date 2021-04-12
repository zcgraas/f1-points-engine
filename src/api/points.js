module.exports = function getPoints(req, res, next) {
  let points = req.query.points;
  switch (points.length) {
    case 11:
      break;
    case 10:
      console.log("Fastest Lap missing, assumed 0");
      break;
    default:
      return res.json({ error: "invalid points array" });
      console.log("invalid points array");
  }

  return res.json({ points: req.query.points });
};
