//  pages/api/comments/idComments

import { ORMservice } from "../../../../../services/ORMservice";
import { MongoConfigService } from "../../../../../services/MongoConfigService";

export default async function handler(req,res) {

    switch(req.method) {
        case "GET":
            const response= await ORMservice.connectAndFindOne(MongoConfigService.collections.comments, req.query.idComment)
            res.json({status:200, data:response});
        case "PUT":
            const comment_to_put = req.body;
            await ORMservice.connectAndUpdateOne(MongoConfigService.collections.comments, req.query.idComment, comment_to_put);
            res.json({status:200})
            break;
        case "DELETE":
            await ORMservice.connectAndDeleteOne(MongoConfigService.collections.comments, req.query.idComment);
            res.json({status:200})
    }
}