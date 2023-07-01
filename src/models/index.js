require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function getCollection(collectionName) {
    try {
        await client.connect();
        const db = await client.db("shopee_data");
        return await db.collection(collectionName);
    } catch (err) {
        console.log(err);
    }
}

module.exports = getCollection;
