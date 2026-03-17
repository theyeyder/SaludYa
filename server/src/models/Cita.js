const mongoose = require("mongoose");

const CitaSchema = new mongoose.Schema(
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
    agendaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agenda",
    },
    fecha: {
      type: Date,
      required: true,
    },
    hora: {
      type: String,
      required: true,
      trim: true,
    },
    estado: {
      type: String,
      enum: ["AGENDADA", "CONFIRMADA", "CANCELADA", "REPROGRAMADA", "APARTADA", "ATENDIDA"],
      default: "AGENDADA",
    },
    motivo: {
      type: String,
      trim: true,
    },
    observaciones: {
      type: String,
      trim: true,
    },
    creadoPor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cita", CitaSchema);
