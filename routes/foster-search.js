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
      // console.log(fosterData);
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



      // queries.getKittensForFosters(fosterIDs)
      //   .then(kittens => {
      //     fosterData.forEach(foster => {
      //       foster.kittens = kittens.filter(kitten => {
      //         return kitten.foster_id == foster.id
      //       })
      //     })
      //     console.log(fosterData);
      //     response.json({'results': fosterData})
      //   })

    })
})

module.exports = router
