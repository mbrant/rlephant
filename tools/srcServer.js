import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import open from 'open'
import Webpack from 'webpack'
import config from '../webpack.config.dev'
import mongo from '../app/mongodb'
import configMongoDB from '../config/mongodb.config'
import 'colors'
import mainRouter from '../app/routes'


dotenv.config()

const app = express()
const compiler = Webpack(config)
const contentPath = path.join(__dirname, process.env.DEVELOPMENT_PATH)


// express: use webpack middleware and webpack module with our config

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use(mainRouter)
// express: on root send back index.html


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'))
})

// express: listen on port 8080 for requests forwarded by Nginx

mongo.connect(process.env.MONGODB_URL)
.then(() => configMongoDB(app))
.then(() => app.listen(8080))
.then(() => console.log('server running on port: 8080'.bold.green))
.catch((err) => {
    console.error(err)
    process.exit(1)
})





