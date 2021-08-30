// #region imports
    // #region libraries
    import PluridServer, {
        PluridServerMiddleware,
        PluridServerService,
        PluridServerPartialOptions,
        PluridServerTemplateConfiguration,
    } from '@plurid/plurid-react-server';
    // #endregion libraries


    // #region external
    import helmet from '~kernel-services/helmet';

    /** uncomment to use services */
    import reduxStore from '~kernel-services/state/store';
    import reduxContext from '~kernel-services/state/context';
    import apolloClient from '~kernel-services/graphql/client';

    import {
        shell,
        routes,
        planes,
    } from '../shared';
    // #endregion external


    // #region internal
    import preserves from './preserves';

    import {
        setRouteHandlers,
        setPttpCors,
    } from './handlers';
    // #endregion internal
// #endregion imports



// #region module
/** ENVIRONMENT */
const watchMode = process.env.PLURID_WATCH_MODE === 'true';
const isProduction = process.env.ENV_MODE === 'production';
const buildDirectory = process.env.PLURID_BUILD_DIRECTORY || 'build';
const port = process.env.PORT || 63000;



/** CONSTANTS */
const applicationRoot = 'delicense-app';
const openAtStart = watchMode
    ? false
    : isProduction
        ? false
        : true;

const quiet = false;
// const debug = isProduction
//     ? 'info'
//     : 'error';
const debug = 'info';

const usePTTP = true;



/** Custom styles to be loaded into the template. */
const styles: string[] = [
    //
];


/** Express-like middleware. */
const middleware: PluridServerMiddleware[] = [
    //
];


/** Services to be used in the application. */
const services: PluridServerService[] = [
    /** uncomment to use services */
    {
        name: 'Apollo',
        package: '@apollo/client',
        provider: 'ApolloProvider',
        properties: {
            client: apolloClient,
        },
    },

    {
        name: 'Redux',
        package: 'react-redux',
        provider: 'Provider',
        properties: {
            store: reduxStore({}),
            context: reduxContext,
        },
    },
];


const options: PluridServerPartialOptions = {
    buildDirectory,
    open: openAtStart,
    quiet,
    debug,
};

const template: PluridServerTemplateConfiguration = {
    root: applicationRoot,
};



/** SERVER */
// generate server
const pluridServer = new PluridServer({
    helmet,
    shell,
    routes,
    planes,
    preserves,
    styles,
    middleware,
    services,
    options,
    template,
    usePTTP,
});


// handle non-GET or custom routes (such as API requests, or anything else)
setRouteHandlers(pluridServer);

// if using PTTP
setPttpCors(pluridServer);


/**
 * If the file is called directly, as in `node build/index.js`,
 * it will run the server.
 *
 * The check is in place so that the server can also be imported
 * for programmatic usage.
 */
if (require.main === module) {
    pluridServer.start(port);
}
// #endregion module



// #region exports
export default pluridServer;
// #endregion exports
