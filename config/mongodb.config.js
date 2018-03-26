"use strict"

const conn = require('../app/mongodb').connection

module.exports = configMongoDB

function configMongoDB(app){
    return Promise.all(
    [
        conn.db().createIndex('clients', {email: 1}, {unique: 1})
    ]
    )
}