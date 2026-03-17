const mongoose = require("mongoose");

const AgendaSchema = new mongoose.Schema(
  {
    medicoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    fecha: {
      type: Date,
      required: true,
    },
    horaInicio: {
      type: String,
      required: true,
      trim: true,
    },
    horaFin: {
      type: String,
      required: true,
      trim: true,
    },
    disponible: {
      type: Boolean,
      default: true,
    },
    observaciones: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Agenda", AgendaSchema);
