import express from 'express';
import cors from 'cors';

import { addMovie, getAllMovies } from './movieLibrary.js';


const PORT = 3000;

const app = express();
app.use( cors() );
app.use( express.json() );

app.get("/read/all", getAllMovies);

app.post("/newMovie", addMovie);

app.listen(PORT, () => {
   console.log(`Listening on http://localhost:${PORT}...`);
});
