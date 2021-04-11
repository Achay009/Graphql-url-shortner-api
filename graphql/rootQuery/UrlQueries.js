import {UrlType} from '../types/UrlType.js';
import { UrlModel } from '../../models/UrlModel.js';
import graphql from 'graphql';
import UrlService from '../../services/UrlService.js'

let { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;


export const getUrl = {
    type : UrlType,
    args: {
        slug: { type: GraphQLNonNull(GraphQLString) }
    },
    async resolve(parent, args) {

        let urlServiceInstance = new UrlService();
        let url = await urlServiceInstance.getUrl(args.slug);
        
        return url;
    }
}

export const getAllUrl = {
    type: GraphQLList(UrlType),
    async resolve(parent, args) {
        let urlServiceInstance = new UrlService();
        let urls = await urlServiceInstance.getAllUrl();
       
        return urls
    }
}

