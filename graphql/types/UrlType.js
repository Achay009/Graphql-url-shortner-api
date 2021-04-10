import graphql from 'graphql';

let { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList,GraphQLNonNull} = graphql;

export const UrlType = new GraphQLObjectType({
    name : 'Url',
    fields : () => ({
        id : { type: GraphQLID},
        slug : { type: GraphQLString},
        originalUrl : { type: GraphQLString},
        expiresAt: { type: GraphQLString},
    }),
});