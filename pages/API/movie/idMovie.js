import { ObjectID } from "mongodb";
import clientPromise from "../../../lib/mongodb"

export default async function handler(req,res) {
    const {idMovie} = res.query.idMovie;
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const dbMovie = await db.collection("movies").findOne({_id : new ObjectID(idMovie)});

    res.json({status: 200, data : {movies: dbMovie} })
}