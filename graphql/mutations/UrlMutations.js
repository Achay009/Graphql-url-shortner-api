import { UrlType } from '../types/UrlType.js';
import graphql from 'graphql';
import yup from 'yup';
import UrlService from '../../services/UrlService.js'

let { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;

const schema = yup.object().shape({
    url : yup.string().required().url()
})

export const shortenUrl = {
    type: UrlType,
    args: {
        url : { type: GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent, args, context) {
        try {
            
            let url = args.url;
            await schema.validate({url})
            let urlServiceInstance = new UrlService();
            let newUrl = urlServiceInstance.shortenUrl(url, context);
            
            return newUrl
        } catch(error) {
            return error;
        }
    }
}