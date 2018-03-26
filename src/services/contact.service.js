"use strict"

import axios from 'axios'

module.exports = {
    test: _test
}

function _test(){
    return axios.get('/api/contact')
    .then(res => {
        console.log(res)
        return res
    })
    .catch(err => {
        console.log(err)
    })
}