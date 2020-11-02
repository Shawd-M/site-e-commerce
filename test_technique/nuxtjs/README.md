# maskoff

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).



Utiliser ```npm install i``` pour installer node_module

                                                       WARNING                                            
Il faut sur le navigateur désactiver CORS pour pouvoir faire des requêtes
Ce qui marche : 
    - Ajouter un objet
    - Supprimer un objet
    - Inscription
    - Connexion 
    - Affichage de la liste des objets
    - Front en NuxtJS
    - Back en NodeJS

Ce qui marche pas : 
    - Ajouter une image
    - Site qui s'adapte si on est Log in ou Log Out
    - Modèle MVC sur du NuxtJS ( Problème rencontré, lire le README du dossier Controller )
    
Ce que je n'ai pas eu le temps de faire : 
    - Modification d'objet

Il faut modifier les IP sur les routes des requêtes axios

