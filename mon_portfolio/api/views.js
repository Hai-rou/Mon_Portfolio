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
    console.log('[API Views] Début de la requête');
    
    // Vérifier la variable d'environnement
    if (!process.env.MONGODB_URI) {
      console.error('[API Views] MONGODB_URI manquante');
      return res.status(500).json({
        success: false,
        error: 'Configuration MongoDB manquante'
      });
    }

    // Connexion réutilisée grâce au client initialisé en dehors du handler
    console.log('[API Views] Connexion à MongoDB...');
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('views');

    console.log('[API Views] Incrémentation du compteur...');
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

    console.log('[API Views] Résultat:', JSON.stringify(result));

    // Avec le driver MongoDB moderne, le document est dans result (pas result.value)
    const viewCount = result?.count || 1;

    console.log('[API Views] Compteur:', viewCount);

    return res.status(200).json({
      success: true,
      views: viewCount
    });

  } catch (error) {
    console.error('[API Views] Erreur complète:', error);
    return res.status(500).json({
      success: false,
      error: 'Erreur lors de la récupération des vues',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
