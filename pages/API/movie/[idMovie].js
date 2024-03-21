// api/movie/idmovie

import { ORMservice } from "../../../services/ORMservice";
import { MongoConfigService } from "../../../services/MongoConfigService";

export default async function handler(req,res) {

    switch(req.method) {
        case "GET":
            const response= await ORMservice.connectAndFindOne(MongoConfigService.collections.movies, req.query.idMovie)
            res.json({status:200, data:response});
            break;
        case "PUT":
            const movie_to_put = req.body;
            await ORMservice.connectAndUpdateOne(MongoConfigService.collections.movies, req.query.idMovie, movie_to_put);
            res.json({status:200})
            break;
        case "DELETE":
            await ORMservice.connectAndDeleteOne(MongoConfigService.collections.movies, req.query.idMovie);
            res.json({status:200})
            break;
    }
}