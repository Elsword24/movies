import { ObjectId } from 'mongodb';
import { MongoConfigService } from './MongoConfigService';
import clientPromise from '../lib/mongodb';

const connectToDb = async () => {

    const client = await clientPromise;

    return client.db(MongoConfigService.dbName.mflix);
}

export const ORMservice = {
    connectAndFind: async (dbName) => {
        const db = await connectToDb();
        return await db.collection(dbName).find({}).limit(10).toArray();
    },

    connectAndFindOne: async(dbName, idObjectToFind) => {
        const db = await connectToDb();
        return await db.collection(dbName).findOne({_id: new ObjectId(idObjectToFind)});
    },

    connectAndAddOne: async(dbName,item) => {
        const db = await connectToDb();
        return await db.collection(dbName).insertOne({item})
    },

    connectAndDeleteOne: async(dbName,ItemId) => {
        const db = await connectToDb();
        return await db.collection(dbName).findOneAndDelete({_id: new ObjectId(ItemId)})
    },

    connectAndUpdateOne: async (dbName,itemId,item) => {
        const db = await connectToDb();
        return await db.collection(dbName).findOneAndUpdate(
            { _id: new ObjectId(itemId) },
            { $set: item },
            { returnDocument: "after" }
        );
    },
}