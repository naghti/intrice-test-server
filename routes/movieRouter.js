const Router = require('express')
const router = new Router()
const movieController = require("../controllers/movieController")

router.get("/", movieController.getAll)
router.post("/", movieController.create)
router.delete("/", movieController.delete)
router.patch("/", movieController.edit)

module.exports = router