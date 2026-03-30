const clientPromise = require('./lib/mongodb.cjs');

module.exports = async function handler(req, res) {
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
    const updateResult = await collection.findOneAndUpdate(
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

    console.log('[API Views] Type de résultat:', typeof updateResult);
    console.log('[API Views] updateResult.value:', updateResult?.value);

    // Selon le driver MongoDB, le document peut être dans .value
    let viewCount;
    if (updateResult && updateResult.value && updateResult.value.count !== undefined) {
      viewCount = updateResult.value.count;
    } else {
      // Fallback: récupérer le document
      const doc = await collection.findOne({ _id: 'global_views' });
      viewCount = doc?.count || 1;
    }

    console.log('[API Views] Compteur final:', viewCount);

    return res.status(200).json({
      success: true,
      views: viewCount
    });

  } catch (error) {
    console.error('[API Views] Erreur complète:', error);
    console.error('[API Views] Stack:', error.stack);
    return res.status(500).json({
      success: false,
      error: 'Erreur lors de la récupération des vues',
      details: error.message
    });
  }
};
