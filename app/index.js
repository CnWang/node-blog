const fs = require('fs')
const path = require('path')
const staticServer = require('./static-server')

class App {
    constructor() {

    }

    initServer() {
        return (request, response) => {
            let {url} = request
            let body = staticServer(url)
            response.end(body)

        }
    }
}

module.exports = App