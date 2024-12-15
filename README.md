# Mon Vieux Grimoire

Ce projet, réalisé dans le cadre de la formation **Développeur Web** d'OpenClassrooms, consiste à développer une API REST sécurisée pour le site "Mon Vieux Grimoire", une plateforme de notation et de gestion de livres.

---

## Table des matières

- [Mon Vieux Grimoire](#mon-vieux-grimoire)
  - [Description du projet](#description-du-projet)
  - [Fonctionnalités](#fonctionnalités)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
  - [Structure du projet](#structure-du-projet)
  - [Technologies utilisées](#technologies-utilisées)
  - [Auteur](#auteur)
  - [Licence](#licence)

---

## Description du projet

"Mon Vieux Grimoire" est une API REST permettant aux utilisateurs de :

- Gérer un catalogue de livres.
- Noter des livres et consulter les avis des autres utilisateurs.
- Authentifier les utilisateurs via un système sécurisé.

---

## Fonctionnalités

1. **Authentification des utilisateurs** :
   - Inscription et connexion des utilisateurs avec validation des mots de passe.
   - Utilisation de tokens JWT pour sécuriser les routes privées.

2. **Gestion des livres** :
   - Création, mise à jour et suppression des livres.
   - Consultation des détails d'un livre.
   - Ajout de notes et calcul de la moyenne des évaluations pour chaque livre.

3. **Protection des données** :
   - Validation des entrées utilisateur.
   - Utilisation de middleware pour gérer les autorisations et la sécurité.

---

## Prérequis

- **Node.js** (version 14 ou supérieure)
- **npm** (version 6 ou supérieure)
- **MongoDB** : Une instance locale ou distante de MongoDB pour stocker les données.

---

## Installation

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/RacoonyThibault/Api-Mon-vieux-grimmoire.git
   ```

2. **Naviguer dans le répertoire du projet** :
   ```bash
   cd Api-Mon-vieux-grimmoire
   ```

3. **Installer les dépendances** :
   ```bash
   npm install
   ```

4. **Configurer les variables d'environnement** :
   - Créez un fichier `.env` à la racine du projet.
   - Ajoutez les variables suivantes :
     ```env
     MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>
     JWT_SECRET=your_jwt_secret_key
     PORT=3000
     ```

5. **Lancer le serveur** :
   ```bash
   npm start
   ```

6. **Accéder à l'API** :
   - L'API est accessible par défaut à l'adresse : `http://localhost:3000`

---

## Structure du projet

```
├── controllers/         # Gestion de la logique des routes
├── middleware/          # Middleware de validation et sécurité
├── models/              # Schémas Mongoose pour les données
├── routes/              # Définition des routes de l'API
├── utils/               # Fonctions utilitaires
├── .env                 # Variables d'environnement (non inclus dans le dépôt)
├── server.js            # Point d'entrée principal de l'application
└── README.md            # Documentation du projet
```

---

## Technologies utilisées

- **Node.js** : Environnement d'exécution pour JavaScript.
- **Express.js** : Framework web minimaliste pour Node.js.
- **MongoDB** : Base de données NoSQL pour le stockage des informations.
- **Mongoose** : ODM pour interagir avec MongoDB.
- **JWT (JsonWebToken)** : Pour la gestion des sessions utilisateurs.

---

## Auteur

- **Thibault Frégier** : [Profil GitHub](https://github.com/RacoonyThibault)

---

## Licence

Ce projet est réalisé dans le cadre d'un programme de formation et n'a pas vocation à être utilisé à des fins commerciales.

