import {UrlModel} from '../models/UrlModel.js';
import UrlService from '../services/UrlService.js'

let urlServiceInstance = new UrlService();


describe('UrlService function definitions', () => {
    test('Get All Urls should be defined', () => {
        expect(urlServiceInstance.getAllUrl).toBeDefined()
    });
    test('Get A single Url function should be defined', () => {
        expect(urlServiceInstance.getUrl).toBeDefined()
    });
    test('Shorten Url function should be defined', () => {
        expect(urlServiceInstance.shortenUrl).toBeDefined()
    });
})
