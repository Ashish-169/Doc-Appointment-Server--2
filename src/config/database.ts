import { MongoClient, ServerApiVersion } from "mongodb";

let client: MongoClient;

const initializeMongo = async () => {
  const mongo_uri = process.env.MONGO_URI || "";

  client = new MongoClient(mongo_uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  console.log("DB Connected");
};

export { client, initializeMongo };
