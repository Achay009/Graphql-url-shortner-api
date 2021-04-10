import {UrlModel} from '../models/UrlModel.js';
import {nanoid} from 'nanoid';
import moment from 'moment';

export default class UrlService {
    constructor(){

    }

    async getUrl(slug) {
        const url = await UrlModel.find({slug : slug});
        return url;
    }

    async shortenUrl(originalUrl, context) {
        let slug = nanoid(5);
        let shortUrl = context.req.protocol  + '://' + context.req.hostname + '/' + slug;
        let expiresAt = moment().add(10, 'days').calendar();
        let data = {
            slug,
            shortUrl,
            originalUrl,
            expiresAt
        }
        let newUrl = await UrlModel.create(data);

        if (! newUrl) {
            throw new Error('Unable to create new Url');
        }

        return newUrl;
    }

    async getAllUrl() {
        let urls = await UrlModel.find({})

        return urls
    }
    
}