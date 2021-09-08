const router = require("express").Router()

const Restaurant = require('./../models/Restaurant.model')


router.get("/crear", (req, res, next) => res.render("restaurants/new-restaurant"))

router.post("/crear", (req, res, next) => {

    const { name, description, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Restaurant
        .create({ name, description, location })
        .then(() => res.redirect('/restaurantes/mapa'))
        .catch(err => console.log(err))
})




router.get("/mapa", (req, res, next) => res.render("restaurants/restaurants-map"))




module.exports = router