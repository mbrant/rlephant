"use strict"

const express = require('express')
const router = express.Router()
const path = require('path')

// Api Prefixes 

const contactApiPrefix = '/api/contact'

// Page Routes

const contactRoutes = require('./contact.routes')(contactApiPrefix)

module.exports = router

router.use(contactApiPrefix, contactRoutes)

useAPIErrorHandlers(router)

function useAPIErrorHandlers(router){
    router.use("/api/*", (req,res,next)=>{
        res.sendStatus(404)
    })

    router.use((err, req, res, next) => {
        if(!err){
            return next()
        }

        console.log(err.stack)

        res.sendStatus(500)
    })
}