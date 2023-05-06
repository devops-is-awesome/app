import { MongoClient } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

class Singleton {
  private static _instance: Singleton;
  private client: MongoClient;
  private clientPromise: Promise<MongoClient>;
  private constructor() {
    this.client = new MongoClient(process.env.DB_URL as string);
    this.clientPromise = this.client.connect();
    if (process.env.NODE_ENV === 'development') {
      // In development mode, use a global variable so that the value
      // is preserved across module reloads caused by HMR (Hot Module Replacement).
      global._mongoClientPromise = this.clientPromise;
    }
  }

  public static get instance() {
    if (!this._instance) {
      this._instance = new Singleton();
    }
    return this._instance.clientPromise;
  }
}

const clientPromise = Singleton.instance;

const ensureCollection = async () => {
  const client = await clientPromise;

  try {
    const collection = client.db('ops').collection('num');
    const item = await collection.findOne();
    console.log('found: ', item);
    if (!item) {
      await collection.insertOne({
        number: 0,
      });
    }
  } catch (err) {
    console.log('ERROR: ', err);
  }
};

void ensureCollection();

export default clientPromise;
