#!/usr/bin/env node

/**
 * Script d'aide pour configurer l'environnement local
 */

const fs = require('fs');
const path = require('path');

console.log('Configuration de l\'environnement local...\n');

const envLocalPath = path.join(__dirname, '.env.local');
const envExamplePath = path.join(__dirname, '.env.example');

// Vérifier si .env.local existe déjà
if (fs.existsSync(envLocalPath)) {
    console.log('✅ Le fichier .env.local existe déjà.');
    console.log('📄 Contenu actuel:');
    const content = fs.readFileSync(envLocalPath, 'utf8');
    console.log(content);
} else if (fs.existsSync(envExamplePath)) {
    // Copier .env.example vers .env.local
    const exampleContent = fs.readFileSync(envExamplePath, 'utf8');
    fs.writeFileSync(envLocalPath, exampleContent);
    console.log('✅ Fichier .env.local créé à partir de .env.example');
    console.log('⚠️  N\'oubliez pas de modifier les valeurs avec vos vraies informations !');
} else {
    // Créer un .env.local basique
    const basicContent = `# Configuration pour l'environnement local Vercel
EMAIL_USER=votre.email@gmail.com
EMAIL_PASS=votre_mot_de_passe_d_application

# Pour Gmail:
# 1. Activez l'authentification à 2 facteurs
# 2. Générez un mot de passe d'application
# 3. Utilisez ce mot de passe pour EMAIL_PASS
`;
    fs.writeFileSync(envLocalPath, basicContent);
    console.log('✅ Fichier .env.local créé avec la configuration de base');
}

console.log('\n🔧 Étapes suivantes:');
console.log('1. Éditez .env.local avec vos vraies valeurs');
console.log('2. Lancez: npm run dev:vercel');
console.log('3. Testez l\'API avec: npm run test:api');
console.log('4. Ou testez directement dans le navigateur sur http://localhost:3000');