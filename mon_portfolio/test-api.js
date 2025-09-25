// Test de l'API de contact
// Ouvrir la console du navigateur (F12) et coller ce code

async function testerAPI() {
  const testData = {
    nom: "Test Local",
    email: "test@exemple.com",
    message: "Ceci est un message de test depuis l'environnement local Vercel"
  };

  try {
    console.log("Envoi de la requête test...");
    
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(testData)
    });

    console.log("Statut de la réponse:", response.status);
    
    const data = await response.json();
    console.log("Réponse de l'API:", data);
    
    if (response.ok) {
      console.log("✅ Test réussi !");
    } else {
      console.log("❌ Test échoué:", data.message);
    }
    
  } catch (error) {
    console.error("❌ Erreur lors du test:", error);
  }
}

// Exécuter le test
testerAPI();