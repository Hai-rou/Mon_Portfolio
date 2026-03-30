import { MongoClient } from 'mongodb';

const options = {
  maxPoolSize: 5,
  minPoolSize: 0,
  maxIdleTimeMS: 20000,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 30000,
};

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    throw new Error('Variable d\'environnement MONGODB_URI manquante');
  }

  const client = new MongoClient(uri, options);
  await client.connect();
  cachedClient = client;
  
  return cachedClient;
}

export default async function handler(req, res) {
  // Configuration CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    if (!process.env.MONGODB_URI) {
      return res.status(500).json({
        success: false,
        error: 'Configuration MongoDB manquante'
      });
    }

    const client = await connectToDatabase();
    const db = client.db('portfolio');
    const collection = db.collection('views');

    const updateResult = await collection.findOneAndUpdate(
      { _id: 'global_views' },
      { 
        $inc: { count: 1 },
        $set: { lastVisit: new Date() }
      },
      { 
        upsert: true,
        returnDocument: 'after'
      }
    );

    // Le document mis à jour est dans updateResult.value ou updateResult directement
    const viewCount = updateResult?.value?.count || updateResult?.count || 1;

    return res.status(200).json({
      success: true,
      views: viewCount
    });

  } catch (error) {
    console.error('Erreur API views:', error);
    return res.status(500).json({
      success: false,
      error: 'Erreur lors de la récupération des vues',
      details: error.message
    });
  }
}
