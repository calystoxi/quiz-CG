# Quiz de Culture Générale – React

Une application web de quiz de culture générale développée avec React, Axios et React Router. Elle utilise l'API [Open Trivia DB](https://opentdb.com/) pour générer 10 questions aléatoires à chaque session.

---

## Démarrage rapide

### Prérequis

- Node.js et npm doivent être installés sur votre machine

### Installation

1. Cloner le projet :

   ```bash
   git clone https://github.com/votre-utilisateur/quiz-culture.git
   cd quiz-culture
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Lancer l'application :

   ```bash
   npm start
   ```

   L'application sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000)

---

## Structure du projet

```
src/
├── components/
│   └── Quiz.js         // Logique principale du quiz
├── pages/
│   └── Home.js         // Page d'accueil
├── App.js              // Définition des routes
├── index.js            // Point d'entrée de l'application
└── index.css           // Styles de base
```

---

## Technologies utilisées

- **React** : création de l’interface
- **React Router DOM** : navigation entre pages
- **Axios** : requêtes HTTP vers l’API de quiz
- **Open Trivia DB** : source de données pour les questions

---

## Fonctionnalités

- Page d'accueil simple avec bouton "Commencer le quiz"
- 10 questions à choix multiple générées automatiquement
- Calcul du score à la fin du quiz
- Aucune réponse n’est enregistrée ou stockée

---

## Exemple d'améliorations possibles

- Ajout d’un minuteur
- Sélection de catégorie ou difficulté
- Sauvegarde des scores
- Ajout d’un écran de résumé détaillé

---

## Équipe

- Aubry Antoine – Développeur principal

---

## Licence

Projet académique à l'HEIG-VD – non destiné à une utilisation commerciale.