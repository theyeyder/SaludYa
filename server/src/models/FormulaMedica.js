const mongoose = require("mongoose");

const MedicamentoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    dosis: {
      type: String,
      required: true,
      trim: true,
    },
    frecuencia: {
      type: String,
      required: true,
      trim: true,
    },
    duracion: {
      type: String,
      trim: true,
    },
    indicaciones: {
      type: String,
      trim: true,
    },
  },
  { _id: false }
);

const FormulaMedicaSchema = new mongoose.Schema(
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
    historiaClinicaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HistoriaClinica",
    },
    medicamentos: {
      type: [MedicamentoSchema],
      default: [],
    },
    observaciones: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FormulaMedica", FormulaMedicaSchema);
