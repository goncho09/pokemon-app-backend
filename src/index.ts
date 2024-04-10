import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import pokemonsRoute from './routes/pokemon.route';


const app: Express = express();
const port = process.env.PORT || 3000;

// MIDDLEWARES
app.use(express.json());
dotenv.config();


//RUTAS
app.use('/api',pokemonsRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});