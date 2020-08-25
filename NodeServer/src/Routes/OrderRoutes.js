const Router = require('express').Router();

Router.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

Router.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
});

Router.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});

Router.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});

module.exports = Router;