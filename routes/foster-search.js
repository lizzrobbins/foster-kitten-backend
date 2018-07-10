const express = require('express')
const queries = require('../database/queries')
const router = express.Router()

router.get('/', (request, response) => {
  let body = request.body
  queries.getFostersByName(body.name)
    .then(fosterData => {
      let fosterIDs = fosterData.map(eachFoster => {
        return eachFoster.id
      })
      queries.getKittensForFosters(fosterIDs)
        .then(kittenData => {
          console.log(kittenData);
          response.json(
            {
              'resultsFoster': fosterData,
              'resultsKitten': kittenData
            }
          )
        })
    })
})

module.exports = router
