# CryptoLotto

**CryptoLotto** est une application de loterie décentralisée (Node.js, Express, TypeORM) qui utilise PostgreSQL via Docker.

## Prérequis
- [Node.js](https://nodejs.org/) (v16+ recommandé)
- [Docker](https://www.docker.com/) installé et lancé

## Installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/AbdallahSlimane/cryptolotto-api.git
   cd cryptolotto
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```

## Démarrer PostgreSQL avec Docker
1. Lancez la base de données PostgreSQL (conteneur Docker) :
   ```bash
   docker compose up -d 
   ```
   Cette commande crée un conteneur nommé **`cryptolotto`** exposant **PostgreSQL** sur le port **5423**.

2. Vérifiez qu’il tourne :
   ```bash
   docker ps
   ```

## Lancer le serveur
Une fois PostgreSQL démarré :
```bash
npm run dev
```
Le serveur écoute sur **http://localhost:3000**.

## Routes principales
- **GET** `/lotteries` : Lister toutes les loteries  
- **GET** `/lotteries/:id` : Obtenir une loterie par son ID  
- **GET** `/lotteries/active?active=true` : Lister les loteries actives (ou inactives avec `false`)  
- **GET** `/lotteries/user/:metamaskId` : Lister les loteries d’un utilisateur
---
