const mongoose = require("mongoose");

const PacienteSchema = new mongoose.Schema(
  {
    tipoDocumento: {
      type: String,
      enum: ["CC", "TI", "CE", "PP", "RC"],
      required: true,
    },
    numeroDocumento: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    fechaNacimiento: {
      type: Date,
    },
    telefono: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },
    eps: {
      type: String,
      trim: true,
    },
    acompanante: {
      type: String,
      trim: true,
    },
    sexo: {
      type: String,
      enum: ["M", "F", "OTRO"],
    },
    discapacidad: {
      type: String,
      trim: true,
    },
    tipoSangre: {
      type: String,
      trim: true,
    },
    ocupacion: {
      type: String,
      trim: true,
    },
    etnia: {
      type: String,
      trim: true,
    },
    direccion: {
      type: String,
      trim: true,
    },
    estado: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Paciente", PacienteSchema);
