## Commandes à lancer

Pour lancer le projet:

### `yarn`

Installe les packages du projet

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Documentations

2 Nouvelles librairies utilisées dans le projet, React router et Styled components.

#### React router

Sert à gérer le routing/navigation de l'application
https://reacttraining.com/react-router/web/guides/quick-start

#### Styled components

Sert à écrire du css sous forme de composants React.
https://www.styled-components.com/

## But de l'exercice

### Créer une liste d'articles

Tu vas devoir créer une liste d'articles à partir des données en dur déjà présentes

Il vas donc falloir créer plusieurs composants :

- Articles
- Article
- Card (Composant à créer dans common)

Une card d'article doit contenir le titre, l'image, la description courte et le prix.
4 Articles maximum par ligne

Si tu ne sais pas ce que veux dire l'appelation card voici un exemple de ce que je peux attendre :

https://stackoverflow.com/questions/46461597/react-all-the-cards-in-the-list-are-re-rendering-when-one-cards-state-is-change/46461638

Tu es libre de présenter ça comme tu veux.

### Détails d'un article

Un article est cliquable et on atterit sur une page de détail de l'article avec tous les informations précédentes excepté le fait que l'on a une description longue plutot qu'une courte.
Cela va donc t'obliger à créer un nouvel écran `Articles` dans screen.
Il faudra passer l'id de l'article sur lequel on a cliqué vers le nouvel écran.
Tu trouveras les informations nécessaire à ça dans la doc de React-router.
