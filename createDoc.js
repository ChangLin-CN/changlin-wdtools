const path = require('path'),
    fs = require('fs'),
    jsdoc2md = require('jsdoc-to-markdown');

jsdoc2md.render({
    files: [
        'src/cookie.js',
        'src/search.js',
        'src/url.js',
        'src/browser.js',
        'src/animationFrame.js',
        'src/css.js',
        'src/event.js',
        'src/FEL.js',
        'src/offset.js'
    ],
    template: require('./README.tpl.js').tpl
}).then(d => {
    fs.writeFile(path.resolve(__dirname, 'README.md'), d)
})