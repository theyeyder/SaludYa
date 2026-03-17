const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error(
      "Falta configurar MONGO_URI. Crea el archivo server/.env con tu cadena de conexión de MongoDB."
    );
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB conectado correctamente");
  } catch (error) {
    console.error("Error conectando MongoDB:", error.message || error);
    process.exit(1);
  }
};

module.exports = connectDB;
