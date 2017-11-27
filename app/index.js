class App {
    constructor() {

    }

    initServer() {
        return (request, response) => {
            response.end(`hello world 1`)
        }
    }
}

module.exports = App