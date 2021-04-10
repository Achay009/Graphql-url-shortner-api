import { RedirectUrl} from '../Controllers/UrlController.js';
import express from  'express';

export default () => {
    let api = express.Router({strict : true});

    api.get('/:slug', RedirectUrl);
    api.get('/make', (req, res, next) => {
        res.send('Making it ');
    });

    return api;
}