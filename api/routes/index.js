import { RedirectUrl} from '../Controllers/UrlController.js';
import express from  'express';


const api = express.Router();

api.get('/:slug', RedirectUrl);

export default api;
