# API Movie

Ce projet vise à fournir une interface via une API permettant d'accéder à une base de données hébergée sur MongoDB, contenant des films et des commentaires.

L'application est basé sur next-js, la base de données est en Mongo, swagger est aussi utilisé dans son fichier fait en JSON. L'application utilise Node.js

## Comment utiliser

Pour utiliser l'application, assurez-vous d'avoir Node.js installé en version 18.7.5.

1. Exécutez la commande suivante pour installer toutes les dépendances :

```npm install ```
pour installer toutes les dépendances.


2. Ensuite, lancez l'application en local avec la commande :
```npm run dev```


Elle sera hébergée sur le port 3000. Assurez-vous d'avoir configuré une connexion à MongoDB et d'avoir une copie de la base de données (il s'agit d'une base de données MongoDB de base).

## Endpoints

Il existe 10 endpoints, tous décrits dans le Swagger à : [Swagger](http://localhost:3000/api-docs)

Ces endpoints permettent de récupérer des données, de les mettre à jour, de les supprimer ou d'en ajouter.

## Roadmap

L'application pourra bénéficier de plusieurs mises à jour :

| Non prévu                          | Prévu                | En cours              |
| ---------------------------------- | -------------------- | ----------------------|
| Mise en ligne                      | Authentification     | Refactoring du code   |
| Création de tests d'intégration    | Tests unitaires      | Ajout d'endpoints de patch |

D'autres améliorations seront certainement prévues par la suite. Vous pouvez suivre l'évolution du projet grâce au tableau ci-dessus.
