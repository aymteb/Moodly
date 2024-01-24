# Description:
```
Moodly est une application basée sur Strapi et Vue.js permettant aux utilisateurs d'enregistrer leurs humeurs quotidiennes de manière anonyme. Ainsi les managers, peuvent collecter les informations concernant leur équipe et ainsi desceller les éventuels problèmes.  L'application offre une interface intuitive pour suivre les différentes humeurs au fil du temps.
```

## Fonctionnalités:
```
Enregistrement quotidien des humeurs : Permet aux utilisateurs d'enregistrer leur humeur quotidienne avec des informations détaillées telles que l'humeur elle-même, la date et le nombre de réactions. Réservé uniquement aux employés

Visualisation des données : Affiche un graphique en camembert interactif pour visualiser la répartition des différentes humeurs en fonction de la fréquence. Réservé uniquement aux managers

Affichage des tags associés : Permet aux managers de visualiser les tags associés à une humeur particulière lorsqu'ils cliquent sur une partie spécifique du camembert. Réservé uniquement aux managers
```

## Prérequis:
```
Avoir un émulateur à jour pour pouvoir lancer l'application sur android ou ios.
Node.js
npm
Strapi
```

## Lancer le projet:
```
git clone git@github.com:pierrrebouillard/Moodly.git
cd Moodly
npm install
cd back
npm install

Pour lancer strapi depuis le dossier back:
npm run develop

Pour lancer le serveur depuis la racine du projet:
npm run serve

Pour lancer l'application ios:
npx cap open ios

Pour lancer l'application android:
npx cap open android
```

## Utilisation:
```
Connexion à l'application:
Si vous voulez vous connecter avec un profil employé :
email : john.doe@okde.com
mot de passe : johndoe

Si vous voulez vous connecter avec un profil manager :
email : okde@okde.com
mot de passe : okdeokde

Connexion à la base de données strapi:
Merci de demander l'accès à un membre de l'équipe
```
## Construction et déploiement:
```
npm build
npm run serve
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
