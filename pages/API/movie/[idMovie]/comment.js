// pages/api/comments

import {MongoConfigService} from "../../../../services/MongoConfigService"
import {ORMservice} from "../../../../services/ORMservice"

export default async function handler(req, res) {

switch (req.method) {
    case "POST" : 
        const addedComment = await ORMservice.connectAndAddOne(MongoConfigService.collections.comments,req.body)
        res.json({status:200, data : addedComment})
    case "GET":
        const comments = await ORMservice.connectAndFind(MongoConfigService.collections.comments)
        res.json({status:200, data : comments})
}
}