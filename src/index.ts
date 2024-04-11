import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';

import pokemonsRoute from './routes/pokemon.route';


const app: Express = express();
const port = process.env.PORT || 3000;

// MIDDLEWARES
app.use(express.json());
app.use(cors({
  origin: '*', // Wildcard is NOT for Production
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
dotenv.config();


//RUTAS
app.use('/api',pokemonsRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});