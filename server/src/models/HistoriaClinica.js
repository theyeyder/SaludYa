const mongoose = require("mongoose");

const HistoriaClinicaSchema = new mongoose.Schema(
  {
    pacienteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Paciente",
      required: true,
    },
    medicoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    citaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cita",
    },
    motivoConsulta: {
      type: String,
      required: true,
      trim: true,
    },
    enfermedadActual: {
      type: String,
      trim: true,
    },
    diagnostico: {
      type: String,
      required: true,
      trim: true,
    },
    tratamiento: {
      type: String,
      trim: true,
    },
    observaciones: {
      type: String,
      trim: true,
    },
    signosVitales: {
      presionArterial: { type: String, trim: true },
      frecuenciaCardiaca: { type: String, trim: true },
      temperatura: { type: String, trim: true },
      peso: { type: String, trim: true },
      talla: { type: String, trim: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HistoriaClinica", HistoriaClinicaSchema);
