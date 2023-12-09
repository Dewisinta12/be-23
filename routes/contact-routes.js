const { Router } = require('express');
const endpoint = Router();
const {getAllContactService,createContactService} = require('../controller/food-controller');

endpoint.get('/contact', getAllContactService)
endpoint.post('/contact',createContactService)

module.exports = endpoint;





























