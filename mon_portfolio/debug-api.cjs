#!/usr/bin/env node

/**
 * Script pour tester l'API de contact en local
 * Usage: node debug-api.js
 */

const http = require('http');

console.log('Test de l\'API de contact locale...\n');

// Données de test
const testData = {
  nom: 'Test Debug',
  email: 'test@exemple.com',
  message: 'Message de test depuis le script de debug'
};

// Configuration de la requête
const data = JSON.stringify(testData);
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/send',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
    'Accept': 'application/json'
  }
};

console.log('Envoi de la requête vers:', `http://${options.hostname}:${options.port}${options.path}`);
console.log('Données:', JSON.stringify(testData, null, 2));
console.log();

const req = http.request(options, (res) => {
  console.log('Réponse reçue:');
  console.log('   Status:', res.statusCode);
  console.log('   Headers:', JSON.stringify(res.headers, null, 2));
  console.log();

  let body = '';
  res.setEncoding('utf8');
  
  res.on('data', (chunk) => {
    body += chunk;
  });
  
  res.on('end', () => {
    console.log('Body de la réponse:');
    try {
      const jsonResponse = JSON.parse(body);
      console.log(JSON.stringify(jsonResponse, null, 2));
      
      if (res.statusCode === 200 && jsonResponse.success) {
        console.log('\nTest réussi ! L\'API fonctionne correctement.');
      } else {
        console.log('\nTest échoué. Vérifiez la configuration.');
      }
    } catch (e) {
      console.log('Raw response:', body);
      console.log('\nRéponse JSON invalide:', e.message);
    }
  });
});

req.on('error', (error) => {
  console.error('Erreur de requête:', error.message);
  console.log('\nSolutions possibles:');
  console.log('   1. Vérifiez que Vercel dev est lancé: vercel dev');
  console.log('   2. Vérifiez que le port est 3000');
  console.log('   3. Vérifiez que les variables d\'environnement sont configurées');
  console.log('   4. Copiez .env.example vers .env.local avec vos vraies valeurs');
});

req.on('timeout', () => {
  console.error('Timeout - Le serveur ne répond pas');
  req.destroy();
});

// Timeout de 10 secondes
req.setTimeout(10000);

// Envoi des données
req.write(data);
req.end();