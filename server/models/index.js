const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')

const db = {}

const sequelize = new Sequelize(
 config.db.database,
 config.db.user,
 config.db.password,
 config.db.options,
)

 // functioality to automatically read through all the models in the models folder and set it up to use sequalize
fs
  .readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
      const model = require(path.join(__dirname, file))
      db[model.name] = model
   })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db