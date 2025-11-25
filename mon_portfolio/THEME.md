# 🎨 Système de Thèmes Dark/Light

## Fonctionnalités

✅ **Bouton de basculement** dans la navbar avec icônes soleil/lune  
✅ **Sauvegarde automatique** de la préférence utilisateur dans localStorage  
✅ **Variables CSS dynamiques** pour tous les composants  
✅ **Transitions fluides** entre les thèmes  
✅ **Responsive** - icône seule sur mobile  
✅ **Accessible** - support clavier et ARIA labels

## Utilisation

Le bouton se trouve dans la navbar en haut à droite. Cliquez dessus pour basculer entre :
- 🌙 **Mode Dark** (par défaut) - Fond sombre, idéal pour réduire la fatigue oculaire
- ☀️ **Mode Light** - Fond clair, pour une meilleure lisibilité en plein jour

## Variables de couleurs

### Mode Dark (défaut)
```css
--color-bg: #0D1117
--color-bg-dark: #21262D
--color-text-primary: #E6EDF3
--color-text-secondary: #9CA3AF
```

### Mode Light
```css
--color-bg: #FFFFFF
--color-bg-dark: #F3F4F6
--color-text-primary: #111827
--color-text-secondary: #4B5563
```

## Architecture technique

### Composant ThemeToggle
- `src/components/item/ThemeToggle.jsx` - Composant React
- `src/SASS/item/themetoggle.scss` - Styles du bouton

### Variables CSS
- Définies dans `src/SASS/main.scss`
- Utilisées via `var(--color-*)` dans tous les composants

### Persistance
- LocalStorage key: `theme`
- Valeurs: `'dark'` | `'light'`
- Détection automatique au chargement

## Comment étendre

Pour ajouter un nouveau thème :

1. Ajouter les variables dans `main.scss` :
```scss
[data-theme="nouveau-theme"] {
  --color-bg: #...;
  --color-text-primary: #...;
  // etc.
}
```

2. Mettre à jour la logique dans `ThemeToggle.jsx`
