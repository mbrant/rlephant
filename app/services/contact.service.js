"use strict"

const dotenv = require("dotenv")
const mongodb = require("../mongodb")
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

module.exports = {
    test: _test
}

function _test(){
    console.log('Mongo Function firing')
    const testDoc = {
        test: "successful back end test"
    }
    return conn.db().collection('contact').insertOne(testDoc)
    .then(result => result.insertedId.toString())
    .catch(err => {
        console.warn(err)
        return Promise.reject(err)
    })

}
