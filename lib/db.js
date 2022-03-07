import { MongoClient } from 'mongodb';

const url =
    'mongodb://localhost:27017/blog?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

export async function connectToDatabase() {
    const client = await MongoClient.connect(url);
    return client;
}
