
const router = require("express").Router()
const controller = require("../controllers/pacienteController")

router.get("/", controller.getPacientes)
router.post("/", controller.createPaciente)

module.exports = router
