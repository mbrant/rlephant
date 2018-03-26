"use strict"

import axios from 'axios'

module.exports = {
    test: _test
}

function _test(data){
    return axios.post('/api/contact', data)
    .then(res => {
        console.log(res)
        return res
    })
    .catch(err => {
        console.log(err)
    })
}