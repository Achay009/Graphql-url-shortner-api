import graphql from 'graphql';
import { getUrl, getAllUrl} from './rootQuery/UrlQueries.js';
import {shortenUrl} from './mutations/UrlMutations.js'

let { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;


const Query = new GraphQLObjectType({
    name : 'Query',
    fields : ()=> ({
        getUrl,
        getAllUrl
    }),
});

const Mutation = new GraphQLObjectType({
    name : 'Mutation',
    fields : () => ({
        shortenUrl
    }),
});

export default new GraphQLSchema({
    query: Query,
    mutation: Mutation
})