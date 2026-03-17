const mongoose = require("mongoose");

const DocumentoMedicoSchema = new mongoose.Schema(
  {
    pacienteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Paciente",
      required: true,
    },
    tipo: {
      type: String,
      enum: ["HISTORIA_CLINICA", "FORMULA_MEDICA", "INCAPACIDAD", "PROCEDIMIENTO", "FACTURA"],
      required: true,
    },
    referenciaId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    nombreArchivo: {
      type: String,
      trim: true,
    },
    urlArchivo: {
      type: String,
      trim: true,
    },
    observaciones: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DocumentoMedico", DocumentoMedicoSchema);
