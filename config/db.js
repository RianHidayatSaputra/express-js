const sequelize = require('sequelize');

const db = new sequelize('crud_express_js', 'root', '', {
    dialect: 'mysql'
});

db.sync({sequelize});

module.exports = db;