const Router = require('express')
const router = new Router()

const movieRouter = require("./movieRouter")

router.use("/movie", movieRouter)

module.exports = router