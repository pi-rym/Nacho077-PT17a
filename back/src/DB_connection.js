require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const {UserModel} = require('./models/UserModel')
const {FavoriteModel} = require('./models/FavoriteModel')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
UserModel(sequelize) // CREATE TABLE user ...
FavoriteModel(sequelize)
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
//const { user, favorite } = sequelize.models; // {}
const User = sequelize.models.user
const Favorite = sequelize.models.favorite

User.belongsToMany(Favorite, {through: 'users_favorites'})
Favorite.belongsToMany(User, {through: 'users_favorites'})

const UserFavorites = sequelize.models.users_favorites

// hasOne 1 - 1 
// hasMany 1 - N / role.hasMany(user)
// belongsTo N - 1
// belongsToMany N - N

module.exports = {
   User,
   Favorite,
   UserFavorites,
   conn: sequelize,
};
