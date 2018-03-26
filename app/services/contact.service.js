"use strict"

const dotenv = require("dotenv")
const mongodb = require("../mongodb")
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

module.exports = {
    test: _test
}

function _test(){

    return conn.db().collection('contact').insertOne({_id: new ObjectId()})
    .then(result => result.insertedId.toString())
    .catch(err => {
        console.warn(err)
        return Promise.reject(err)
    })

}
