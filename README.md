# SaludYa

Proyecto base:
React + Node.js + Express + MongoDB + JWT + Socket.io

## Ejecutar backend
cd server
npm install
cp .env.example .env
npm run dev

Variables requeridas en `server/.env`:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/saludya
```

## Ejecutar frontend
cd client
npm install
npm run dev
