import UrlService from '../../services/UrlService.js';



export const RedirectUrl = async (req, res, next) => {
    try {
        console.log(req.params)
        let slug = req.params.slug;

        // if (slug == 'undefined') throw new Error('invalid url');
        console.log(slug)
        let urlServiceInstance = new UrlService();

        let url = await urlServiceInstance.getUrl(slug);
        console.log(url)
        if (!url) {
            res.status(404).send('Url does not exist')
        }

        res.redirect(301, url.originalUrl);
    } catch (error) {
        next(error);
    }
}
