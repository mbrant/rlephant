import fs from 'fs'
import cheerio from 'cheerio'
import colors from 'colors'

fs.readFile('src/index.html', 'utf8', (err, markup) => {
    if (err) {
        return console.log(err)
    }

    const $ = cheerio.load(markup)

    $('meta[name^="viewport"]').after('<link rel="stylesheet" type="text/css" href="style.css"/>')


    fs.writeFile('dist/index.html', $.html(), 'utf8', function (err){
        if (err){
            return console.log(err)
        }
        console.log('index.html written to /dist'.bold.green)
    })
})