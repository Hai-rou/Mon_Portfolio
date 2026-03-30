import clientPromise from './lib/mongodb.js';

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
    // Connexion réutilisée grâce au client initialisé en dehors du handler
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('views');

    // Incrémenter le compteur de vues (atomic operation)
    const result = await collection.findOneAndUpdate(
      { _id: 'global_views' },
      { 
        $inc: { count: 1 },
        $set: { lastVisit: new Date() }
      },
      { 
        upsert: true,  // Créer le document s'il n'existe pas
        returnDocument: 'after'  // Retourner le document mis à jour
      }
    );

    return res.status(200).json({
      success: true,
      views: result.count
    });

  } catch (error) {
    console.error('Erreur API views:', error);
    return res.status(500).json({
      success: false,
      error: 'Erreur lors de la récupération des vues'
    });
  }
}
