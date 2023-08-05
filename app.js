const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./util/DBConnexion');

const app = express();
// app.use(express.static('public'));

app.use(cors());
app.use(bodyParser.json());

const TouristSpotRoute = require('./router/TouristSpotsRoute');
app.use('/touristspots', TouristSpotRoute);

const CategorieRoute = require('./router/CategorieRoute');
app.use('/categorie', CategorieRoute);

const UserRoute = require('./router/UtilisateurRoute');
app.use('/user', UserRoute);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Erreur interne du serveur.' });
});
app.listen(3000, () => {
  console.log('Le serveur est en écoute sur le port 3000.');
});
