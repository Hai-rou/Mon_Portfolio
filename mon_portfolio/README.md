# Portfolio Personnel - React + Vite + Vercel

Portfolio personnel développé avec React, Vite et déployé sur Vercel avec une API de contact fonctionnelle.

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement local avec Vercel

1. **Installer Vercel CLI** (si pas encore fait):
```bash
npm install -g vercel
```

2. **Configuration des variables d'environnement**:
```bash
# Copiez le fichier d'exemple
cp .env.example .env.local

# Éditez .env.local avec vos vraies valeurs
# Notamment EMAIL_USER et EMAIL_PASS pour le formulaire de contact
```

3. **Démarrer l'environnement de développement**:
```bash
# Démarrer avec Vercel (recommandé pour tester l'API)
vercel dev

# OU démarrer avec Vite (sans API)
npm run dev
```

### Production

```bash
# Build pour production
npm run build

# Déployer sur Vercel
vercel --prod
```

## 🔧 Dépannage du formulaire de contact

### Problème: "Pas de message au submit sur localhost"

#### Solutions:

1. **Vérifiez que Vercel dev est lancé**:
```bash
vercel dev
```
L'API n'est disponible qu'avec Vercel dev, pas avec `npm run dev`.

2. **Testez l'API manuellement**:
```bash
node debug-api.js
```

3. **Vérifiez la console du navigateur**:
- Ouvrez F12 > Console
- Tentez d'envoyer le formulaire
- Regardez les logs détaillés

4. **Configuration email**:
- Copiez `.env.example` vers `.env.local`
- Configurez `EMAIL_USER` et `EMAIL_PASS`
- Pour Gmail, utilisez un mot de passe d'application

#### Messages d'erreur courants:

- **"Impossible de contacter le serveur API"**: Vercel dev n'est pas lancé
- **"Configuration du serveur manquante"**: Variables d'environnement manquantes
- **"Erreur HTTP: 500"**: Problème de configuration email

### Variables d'environnement requises

```env
EMAIL_USER=votre.email@gmail.com
EMAIL_PASS=votre_mot_de_passe_d_application
```

## 📁 Structure du projet

```
├── api/                 # API Vercel (Serverless Functions)
│   └── send.js         # Endpoint pour le formulaire de contact
├── src/
│   ├── components/     # Composants React
│   ├── pages/          # Pages du portfolio
│   └── SASS/           # Styles SCSS
├── debug-api.js        # Script de test pour l'API
└── vercel.json         # Configuration Vercel
```
