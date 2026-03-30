const { MongoClient } = require('mongodb');

if (!process.env.MONGODB_URI) {
  throw new Error('Variable d\'environnement MONGODB_URI manquante');
}

const uri = process.env.MONGODB_URI;

// Configuration optimisée pour serverless (Lambda/Vercel)
const options = {
  maxPoolSize: 5,        // Limite pour serverless (chaque instance a son propre pool)
  minPoolSize: 0,        // Pas de connexions pré-maintenues (économise les ressources)
  maxIdleTimeMS: 20000,  // Libère les connexions inutilisées après 20s
  connectTimeoutMS: 10000,  // Timeout de connexion à 10s
  socketTimeoutMS: 30000,   // Timeout socket à 30s pour opérations courtes
};

let client;
let clientPromise;

// Initialisation du client en DEHORS du handler pour réutilisation
// entre les invocations (warm starts)
if (process.env.NODE_ENV === 'development') {
  // En développement, utiliser une variable globale pour éviter
  // de créer trop de connexions avec le hot-reload
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En production, créer une nouvelle connexion
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

module.exports = clientPromise;
