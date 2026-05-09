# 🦎 Kamo — Compagnon de camouflage numérique

Kamo est un prototype de site web de cybersécurité destiné aux jeunes français de 18 à 25 ans. Il propose un parcours gamifié pour apprendre à se protéger sur internet, à travers un diagnostic, une carte interactive et des outils pratiques.

## 🚀 Lancer le projet en local

### Prérequis

- Node.js 18+ ([télécharger](https://nodejs.org/))
- npm 9+

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/TON_COMPTE/kamo.git
cd kamo

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

L'application sera disponible sur `http://localhost:5173/kamo/`

## 🏗️ Build de production

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`.

## 🌐 Déploiement sur GitHub Pages

### 1. Créer le dépôt GitHub

Crée un nouveau dépôt nommé `kamo` sur GitHub.

### 2. Configurer le base path

Dans `vite.config.js`, vérifie que `base` correspond au nom de ton dépôt :

```js
base: '/kamo/', // Remplace par le nom de ton repo si différent
```

### 3. Déployer avec gh-pages

```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter le script dans package.json
# "deploy": "gh-pages -d dist"

# Builder et déployer
npm run build
npm run deploy
```

### 4. Configurer GitHub Pages

Dans les Settings de ton dépôt GitHub :
- Va dans **Pages**
- Source : `gh-pages` branch
- Ton site sera disponible sur `https://TON_COMPTE.github.io/kamo/`

## 📁 Structure du projet

```
kamo/
├── public/
│   └── logo-kameleon.svg       # Logo caméléon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation persistante
│   │   ├── FlyCounter.jsx      # Compteur de mouches animé
│   │   ├── LevelBadge.jsx      # Badge de niveau
│   │   └── LeakRepair.jsx      # Modal réparation de fuite
│   ├── pages/
│   │   ├── Onboarding.jsx      # Onboarding 4 étapes
│   │   ├── Dashboard.jsx       # Tableau de bord
│   │   ├── Map.jsx             # Carte gamifiée
│   │   ├── LocationDetail.jsx  # Détail d'un lieu (slides + tâches)
│   │   └── Tools.jsx           # Page des outils
│   ├── context/
│   │   └── KamoContext.jsx     # État global + localStorage
│   ├── data/
│   │   ├── questions.js        # QCM diagnostic
│   │   ├── themes.js           # Thèmes de la carte
│   │   └── tools.js            # Liste des outils
│   ├── App.jsx                 # Routing principal
│   └── main.jsx                # Point d'entrée
├── index.html
├── vite.config.js
└── package.json
```

## 🛠️ Stack technique

- **Framework** : React 18 + Vite
- **Routing** : React Router v6
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **State** : React Context + localStorage
- **Polices** : Marianne (DSFR) + Spectral (Google Fonts)

## 🔌 Intégration API HaveIBeenPwned (réelle)

Pour connecter la vraie API HIBP, modifie la fonction `checkEmail` dans `src/pages/Onboarding.jsx` :

```js
// L'API HIBP nécessite :
// 1. Une clé API (https://haveibeenpwned.com/API/Key)
// 2. Un proxy côté serveur (l'API n'est pas CORS-friendly depuis le navigateur)
// Documentation : https://haveibeenpwned.com/API/v3#BreachedAccount

async function checkEmail(email) {
  const response = await fetch(`/api/hibp?email=${encodeURIComponent(email)}`, {
    headers: { 'hibp-api-key': 'VOTRE_CLÉ_API' }
  })
  // ...
}
```

## 🎮 Système de gamification

- Chaque tâche cochée dans la Carte = **+1 mouche** 🪰
- Jalons : 5 / 15 / 30 / 45 mouches → badges progressifs
- Les outils se débloquent automatiquement quand toutes les tâches d'un thème sont complétées
- Tout est sauvegardé dans `localStorage` (pas de serveur)

## 📝 Personnalisation du contenu

Les placeholders dans `src/data/themes.js` (marqués `[CONTENU PLACEHOLDER]`) sont à remplacer par du vrai contenu pédagogique en suivant la structure définie.

---

Projet créé par **Kamo** — Camouflage numérique pour tous 🦎
