# Scraper Tiktok <img src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-2.png">

Ce module permet de récupérer les informations de la dernière vidéo TikTok postée par un utilisateur spécifique. Il fournit également des informations générales sur l'utilisateur, telles que le nombre de followers, le nombre de likes, etc.

## Installation

Pour installer ce module, utilisez la commande suivante :

```bash
npm install scraper-tiktok
```

## Dépendances pour les utilisateurs Debian

Si vous êtes sous Debian, vous devrez peut-être installer des paquets supplémentaires pour que Puppeteer fonctionne correctement. Exécutez la commande suivante pour installer les dépendances nécessaires :

```bash
sudo apt install libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 libpangocairo-1.0-0 libxss1 libgtk-3-0
```

[Source des dépendances](https://gist.github.com/tavinus/7effd4b3dac87cb4366e3767679a192f)

## Utilisation

Pour utiliser ce module, importez-le et appelez la fonction getLastTikTokVideo avec le nom d'utilisateur TikTok comme argument :

```javascript
const getLastTikTokVideo = require('scraper-tiktok');

getLastTikTokVideo('lan7ium').then(videoInfo => {
    console.log(videoInfo);
});
```

## Retour

La fonction `getLastTikTokVideo` renvoie un objet contenant les informations suivantes :

- **description** : Description de la dernière vidéo.
- **thumbnailUrl** : URL de la miniature de la dernière vidéo.
- **videoLink** : Lien vers la dernière vidéo.
- **profilePictureUrl** : URL de la photo de profil de l'utilisateur.
- **likeAccount** : Nombre total de likes de l'utilisateur.
- **followers** : Nombre de followers de l'utilisateur.
- **following** : Nombre d'utilisateurs suivis par l'utilisateur.
- **bio** : Biographie de l'utilisateur.
