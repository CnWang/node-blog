/**
 * 静态资源服务
 */
const path = require('path');
const fs = require('fs');

let getPath = url => path.resolve(process.cwd(), 'public', `.${url}`)

let staticFunc = url => {
    if (url === '/') url = '/index.html';
    let body = ''
    try {
        body = fs.readFileSync(getPath(url))
    } catch (e) {
        body = `NOT FOUND ${e.stack}`
    }
    return body
}

module.exports = staticFunc