"use strict"

const contactService = require('../services/contact.service')

let _apiPrefix

module.exports = apiPrefix => {
    _apiPrefix = apiPrefix
    return {
        send: send
    }
}

function send(req, res){
    contactService.test()
    .then(id => {
        console.log("it worked!!!! " + id)
        res
        .status(201)
        .location(`${_apiPrefix}/${id}`)
        .json(id)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
}