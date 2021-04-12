const axios = require("axios");

module.exports = getSeason = (req, response, next) => {
  let year = req.query.year;

  axios
    .get(`http://ergast.com/api/f1/${year}.json`)
    .then((res) => {
      let seasonLength = res.data.MRData.total;
      let racePromiseArray = [];
      //TODO Get fastest lap data

      for (let i = 1; i <= seasonLength; i++) {
        racePromiseArray.push(
          axios
            .get(`http://ergast.com/api/f1/${year}/${i}/results.json`)
            .then((res) => {
              let Races = res.data.MRData.RaceTable.Races;
              let raceResult = [];

              Races[0].Results.map((race) => {
                raceResult[race.position - 1] = race.Driver.familyName;
              });

              return raceResult;
            })
        );
      }
      Promise.all(racePromiseArray).then((seasonResults) => {
        return response.json(seasonResults);
      });
    })
    .catch((err) => console.log(err));
};
