import webpack from 'webpack'
import webpackConfig from '../webpack.config.prod'
import colors from 'colors'

process.env.NODE_ENV = 'production'

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue)

webpack(webpackConfig).run((err, stats) => {
    if (err){
        console.log(colors.red(err))
        return 1
    }

    const jsonStats = stats.toJson()

    if (jsonStats.hasErrors){
        return jsonStats.errors.map(error => console.log(colors.bold.red(error)))
    }

    if (jsonStats.hasWarnings){
        console.log('Webpack generated the following warnings: '.bold.yellow)
        jsonStats.warnings.map(warning => console.log(warning))
    }

    console.log(`Webpack stats: ${stats}`)

    console.log('Your app has been compiled in production mode and written to /dist'.green)

    return 0
})