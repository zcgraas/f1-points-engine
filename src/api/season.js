const axios = require("axios");

module.exports = getSeason = (req, response, next) => {
  let year = req.query.year;
  axios
    .get(`http://ergast.com/api/f1/${year}.json`)
    .then((res) => {
      let seasonLength = res.data.MRData.total;
      let racePromiseArray = [];

      for (let i = 1; i <= seasonLength; i++) {
        racePromiseArray.push(
          axios
            .get(`http://ergast.com/api/f1/${year}/${i}/results.json`)
            .then((res) => {
              let Races = res.data.MRData.RaceTable.Races;
              let raceName = Races[0].raceName;
              let raceResult = [];

              raceResult.push(raceName);

              Races[0].Results.slice(0, 10).map((race) => {
                raceResult[
                  race.position - 1
                ] = `${race.Driver.givenName[0]} ${race.Driver.familyName}`;
              });

              // if (year >= 2004) {
              //   //TODO concat name of fastest driver if season is >= 2004
              //   racePromiseArray.push(
              //     axios
              //       .get(
              //         `http://ergast.com/api/f1/${year}/${i}/fastest/1/results.json`
              //       )
              //       .then((res) => {
              //         raceResult[10]=
              //       })
              //   );
              // }

              return raceResult;
            })
        );
      }

      Promise.all(racePromiseArray).then((seasonResults) => {
        return response.json(seasonResults);
      });
    })
    .catch((err) => {
      return res.json({ error: err });
    });
};
