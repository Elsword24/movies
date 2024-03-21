// /api/movies.js
import {ORMservice} from "../../services/ORMservice"
import {MongoConfigService} from "../../services/MongoConfigService"

export default async function handler(req, res) {
    switch (req.method) {
        case "POST" : 
            const response = await ORMservice.connectAndAddOne(MongoConfigService.collections.movies,req.body)
            res.json({status:200, data:response});

        case "GET":
           const movies = await ORMservice.connectAndFind(MongoConfigService.collections.movies)
           res.json({status:200, data : movies})
            
}
}