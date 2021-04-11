import graphql from 'graphql';
import {getAllUrl, shortenURL} from './rootQuery/UrlQueries.js';

let { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;

//getAllUrl is just an additional function to look up all saved urls
const Query = new GraphQLObjectType({
    name : 'Query',
    fields : ()=> ({
        shortenURL,
        getAllUrl
    }),
});

export default new GraphQLSchema({
    query: Query
})