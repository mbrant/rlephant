import express from 'express'
import path from 'path'
import open from 'open'
import Webpack from 'webpack'
import config from '../webpack.config.dev'

const port = 3000
const app = express()
const compiler = Webpack(config)

// express: use webpack middleware and webpack module with our config

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}))

// express: on root send back index.html

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'))
})

// express: listen on port 3000, if no errors open browser/launch dev server

app.listen(port, function(err){
    if(err){
        console.log(err)
    } else {
        open('http://localhost:' + port)
    }
})