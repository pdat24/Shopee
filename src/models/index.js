const { MongoClient, ServerApiVersion } = require("mongodb");

const URI = "mongodb+srv://datp62661:Noircoding24@mogoservice.xzz2jci.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(URI, {
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
