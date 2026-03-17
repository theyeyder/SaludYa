
const Paciente = require("../models/Paciente")

exports.getPacientes = async (req,res)=>{
  const pacientes = await Paciente.find()
  res.json(pacientes)
}

exports.createPaciente = async (req,res)=>{
  const paciente = new Paciente(req.body)
  await paciente.save()
  res.json(paciente)
}
