import { RedirectUrl} from '../Controllers/UrlController.js';
import express from  'express';


const api = express.Router();

api.get('/', (req, res, next) => {
    res.send('Welcome to GraphQL Url Shortner.........Please go to /graphiql to shorten url')
})
api.get('/:slug', RedirectUrl);

export default api;
