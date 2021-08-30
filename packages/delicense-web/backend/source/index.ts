// #region imports
    // #region libraries
    import express from 'express';
    import {
        json as jsonParser,
    } from 'body-parser';
    import cookieParser from 'cookie-parser';

    import {
        ApolloServer,
    } from 'apollo-server-express';
    import {
        ApolloServerPluginLandingPageDisabled,
        ApolloServerPluginLandingPageGraphQLPlayground,
    } from 'apollo-server-core';
    // #endregion libraries


    // #region internal
    import schemas from './modules/schemas';
    import resolvers from './modules/resolvers';
    // #endregion internal
// #endregion imports



// #region module
const PORT = 55888;

const GRAPHQL_PATH = '/graphql';


const environment = {
    production: process.env.ENV_MODE === 'production',
    development: process.env.ENV_MODE === 'development',
};


const main = async () => {
    const server = express();

    server.use(jsonParser());
    server.use(cookieParser());


    const graphqlServer = new ApolloServer({
        typeDefs: [
            ...schemas,
        ],
        resolvers: {
            ...resolvers,
        },
        context: (
            {
                req,
                res,
            }: any,
        ) => {
            return {
                request: req,
                response: res,
            };
        },
        plugins: [
            environment.production
                ? ApolloServerPluginLandingPageDisabled()
                : ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
    });
    await graphqlServer.start();

    graphqlServer.applyMiddleware({
        app: server,
        path: GRAPHQL_PATH,
    });


    server.listen(PORT, () => {
        console.log(`\n\tDelicense Backend Started on ${PORT}, http://localhost:${PORT}\n`);
    });
}


main();
// #endregion module
