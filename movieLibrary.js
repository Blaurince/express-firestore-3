import {db} from "./src/dbConnect.js";


export function addMovie(req, res) {
   const newMovie = req.body;

   // CREATE add new Movie Show
    db.collection('Movies')
      .add(newMovie)
      .then( doc => res.status(201).send(`New Movie Added: ${doc.id}`) ) 
      .catch( err => res.status(500).send(err) )
}

export async function getAllMovies(req,res){
     const collection = await db.collection('Movies')

      .get()
      .catch(err => res.status(500).send(err))

      const newMovie = collection.docs.map(
      newMovie => ( {...newMovie.data(), id: newMovie.id})

      )
       res.status(201).send()
}