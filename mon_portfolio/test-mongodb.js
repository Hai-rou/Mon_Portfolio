import { MongoClient } from 'mongodb';

// Récupérer la variable depuis process.env (sera passée via le terminal)
const MONGODB_URI = process.env.MONGODB_URI;

async function testConnection() {
  console.log('🔍 Test de connexion MongoDB...\n');

  if (!MONGODB_URI) {
    console.error('❌ Variable MONGODB_URI manquante');
    console.log('ℹ️  Utilisez: $env:MONGODB_URI="mongodb+srv://..." ; node test-mongodb.js');
    process.exit(1);
  }

  console.log('📡 Connexion à:', MONGODB_URI.replace(/:[^:]*@/, ':****@'));

  let client;
  try {
    client = new MongoClient(MONGODB_URI);
    
    console.log('⏳ Connexion en cours...');
    await client.connect();
    
    console.log('✅ Connexion réussie!\n');

    // Tester l'accès à la base de données
    const db = client.db('portfolio');
    console.log('📚 Base de données: portfolio');

    // Lister les collections
    const collections = await db.listCollections().toArray();
    console.log('📋 Collections:', collections.map(c => c.name).join(', ') || 'Aucune (sera créée automatiquement)');

    // Tester la collection views
    const viewsCollection = db.collection('views');
    const viewsDoc = await viewsCollection.findOne({ _id: 'global_views' });
    
    if (viewsDoc) {
      console.log('👁️  Compteur de vues actuel:', viewsDoc.count);
      console.log('📅 Dernière visite:', viewsDoc.lastVisit);
    } else {
      console.log('ℹ️  Compteur de vues non initialisé (sera créé au premier appel API)');
    }

    console.log('\n✅ Tout fonctionne correctement!');

  } catch (error) {
    console.error('❌ Erreur de connexion:', error.message);
    console.error('📝 Détails:', error);
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
      console.log('🔌 Connexion fermée');
    }
  }
}

testConnection();
