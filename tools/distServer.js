import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import open from 'open'
import Webpack from 'webpack'
import config from '../webpack.config.dev'
import mongo from '../app/mongodb'
import configMongoDB from '../config/mongodb.config'
import colors from 'colors'
import mainRouter from '../app/routes'


const app = express()
const compiler = Webpack(config)

dotenv.config()


app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../public')))
app.use(mainRouter)

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

// connect mongo listen on port 8080 for requests forwarded by Nginx

mongo.connect(process.env.MONGODB_URL)
.then(() => configMongoDB(app))
.then(() => app.listen(8080))
.then(() => console.log('server running on port: 8080'.bold.green))
.catch((err) => {
    console.error(colors.red(err))
    process.exit(1)
})





