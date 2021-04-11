import {UrlType} from '../types/UrlType.js';
import { UrlModel } from '../../models/UrlModel.js';
import graphql from 'graphql';
import yup from 'yup';
import UrlService from '../../services/UrlService.js'

let { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;



const schema = yup.object().shape({
    url: yup.string().required().url()
})

export const getAllUrl = {
    type: GraphQLList(UrlType),
    async resolve(parent, args) {
        let urlServiceInstance = new UrlService();
        let urls = await urlServiceInstance.getAllUrl();
       
        return urls
    }
}


export const shortenURL = {
    type : UrlType,
    args: {
        url: { type: GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent, args, context) {
        try {

            let url = args.url;
            await schema.validate({ url })
            let urlServiceInstance = new UrlService();
            let newUrl = urlServiceInstance.shortenUrl(url, context);
            console.log(newUrl)
            return newUrl
        } catch (error) {
            return error;
        }
    }
}

