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
    import {
        environment,

        GRAPHQL_PATH,
        PORT,
    } from './data/constants';

    import schemas from './modules/schemas';
    import resolvers from './modules/resolvers';

    import {
        getCollections,
    } from './services/database';
    // #endregion internal
// #endregion imports



// #region module
const main = async () => {
    const collections = await getCollections();
    if (!collections) {
        console.log('delicense backend error :: no database collections');
        return;
    }


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
        context: ({
            req,
            res,
        }) => {
            return {
                request: req,
                response: res,
                collections,
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
        console.log(`\n\tdelicense backend started on ${PORT}, http://localhost:${PORT}\n`);
    });
}


main();
// #endregion module
