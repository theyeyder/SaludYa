const mongoose = require("mongoose");

const ItemFacturaSchema = new mongoose.Schema(
  {
    concepto: {
      type: String,
      required: true,
      trim: true,
    },
    valor: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: false }
);

const FacturaSchema = new mongoose.Schema(
  {
    pacienteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Paciente",
      required: true,
    },
    citaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cita",
    },
    items: {
      type: [ItemFacturaSchema],
      default: [],
    },
    subtotal: {
      type: Number,
      default: 0,
      min: 0,
    },
    impuestos: {
      type: Number,
      default: 0,
      min: 0,
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
    estado: {
      type: String,
      enum: ["GENERADA", "PAGADA", "ANULADA"],
      default: "GENERADA",
    },
    observaciones: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Factura", FacturaSchema);
