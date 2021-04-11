import UrlService from '../../services/UrlService.js';

export const RedirectUrl = async (req, res, next) => {
    try {
        let slug = req.params.slug;

        if (slug == 'undefined') throw new Error('invalid url');
        
        let urlServiceInstance = new UrlService();
        let url = await urlServiceInstance.getUrl(slug);
        
        if (!url) {
            res.status(404).send('Url does not exist')
        }

        res.redirect(301, url.originalUrl);
    } catch (error) {
        next(error);
    }
}
