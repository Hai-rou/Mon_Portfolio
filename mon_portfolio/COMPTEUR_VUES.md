# 📊 Compteur de Vues - Configuration

Un compteur de vues a été ajouté à votre portfolio, utilisant MongoDB Atlas pour stocker les données de façon persistante.

## 🎯 Ce qui a été ajouté

### 1. API Serverless (`/api/views.js`)
- Endpoint GET qui incrémente et retourne le nombre de visites
- Optimisé pour Vercel avec connexion MongoDB réutilisable
- Configuration de pool adaptée aux fonctions serverless

### 2. Composant React (`ViewCounter.jsx`)
- Affiche le nombre de visites avec une animation
- Formatage automatique des nombres (ex: 1 234)
- Gestion d'erreur gracieuse

### 3. Styles (`viewcounter.scss`)
- Design moderne avec effet de glassmorphism
- Animation de clignotement sur l'icône 👁️
- Responsive pour mobile

## 🚀 Configuration

### Étape 1: Créer une base MongoDB Atlas (GRATUIT)

1. Allez sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Créez un compte gratuit (M0 Sandbox - 512 MB gratuits)
3. Créez un nouveau cluster (sélectionnez la région la plus proche)
4. Créez un utilisateur database :
   - Database Access → Add New Database User
   - Notez le username et password
5. Autorisez l'accès réseau :
   - Network Access → Add IP Address → Allow Access from Anywhere (`0.0.0.0/0`)
6. Obtenez votre URI de connexion :
   - Clusters → Connect → Connect your application
   - Copiez l'URI (format: `mongodb+srv://...`)

### Étape 2: Configuration locale

1. Copiez `.env.example` vers `.env.local` :
```bash
cp .env.example .env.local
```

2. Éditez `.env.local` et ajoutez votre URI MongoDB :
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

⚠️ Remplacez `username`, `password` et `cluster` par vos vraies valeurs !

### Étape 3: Tester en local

```bash
npm run dev
```

Le compteur devrait s'afficher dans le footer. Ouvrez la console du navigateur (F12) pour voir les logs.

### Étape 4: Déploiement sur Vercel

1. Allez dans votre projet Vercel
2. Settings → Environment Variables
3. Ajoutez la variable :
   - Name: `MONGODB_URI`
   - Value: votre URI MongoDB
   - Environnements: Production, Preview, Development ✅

4. Redéployez votre site ou attendez le prochain push

## 📍 Où est affiché le compteur ?

Le compteur est actuellement intégré dans le **Footer** (`Footer.jsx`), visible sur toutes les pages.

Pour le déplacer ailleurs :
```jsx
import ViewCounter from '../components/item/ViewCounter';

// Dans votre composant
<ViewCounter />
```

## 🛠️ Personnalisation

### Changer l'icône
Dans `ViewCounter.jsx`, ligne 46 :
```jsx
<span className="view-counter__icon">👁️</span>  // Changez l'emoji
```

### Modifier les couleurs
Dans `viewcounter.scss`, les couleurs utilisent les variables du thème :
- `$color-primary` : couleur du nombre
- `$color-bg-elevated` : fond du compteur

### Désactiver l'animation
Dans `viewcounter.scss`, commentez :
```scss
// animation: blink 3s ease-in-out infinite;
```

## 🔍 Vérification

### Voir les données dans MongoDB (via VS Code)

1. Ouvrez l'extension MongoDB dans VS Code
2. Connectez-vous avec votre URI
3. Base de données : `portfolio`
4. Collection : `views`
5. Document : `{ _id: "global_views", count: 123, lastVisit: ... }`

### Tester l'API directement

```bash
curl https://votre-site.vercel.app/api/views
```

Réponse attendue :
```json
{
  "success": true,
  "views": 123
}
```

## 🎨 Architecture technique

### Configuration optimisée pour Serverless

Basée sur les bonnes pratiques MongoDB :

```javascript
maxPoolSize: 5        // Limite pour fonctions serverless
minPoolSize: 0        // Pas de connexions pré-maintenues
maxIdleTimeMS: 20000  // Libère les connexions après 20s
connectTimeoutMS: 10000
socketTimeoutMS: 30000
```

Le client MongoDB est initialisé **en dehors du handler** pour permettre la réutilisation entre les "warm starts" des fonctions Vercel.

### Opération atomique

L'incrémentation utilise `findOneAndUpdate` avec `$inc` pour éviter les race conditions :
```javascript
{ $inc: { count: 1 } }  // Atomic increment
```

## ❓ Problèmes courants

### Le compteur n'apparaît pas
- Vérifiez la console du navigateur (F12)
- Vérifiez que `MONGODB_URI` est bien configuré
- Testez l'API directement : `/api/views`

### Erreur de connexion MongoDB
- Vérifiez que votre IP est autorisée (0.0.0.0/0)
- Vérifiez username/password dans l'URI
- Vérifiez que le cluster est bien "Running"

### Le compteur ne s'incrémente pas
- Videz le cache du navigateur
- Ouvrez en navigation privée
- Vérifiez les logs Vercel

## 📚 Resources

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [MongoDB Connection Best Practices](https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/)
- [Vercel Serverless Functions](https://vercel.com/docs/functions/serverless-functions)

---

✅ **Le compteur de vues est maintenant configuré !**
