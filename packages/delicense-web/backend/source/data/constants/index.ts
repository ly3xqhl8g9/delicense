// #region module
export const environment = {
    production: process.env.ENV_MODE === 'production',
    development: process.env.ENV_MODE === 'development',
};



export const GRAPHQL_PATH = process.env.DELICENSE_GRAPHQL_PATH || '/graphql';

export const PORT = parseInt(process.env.PORT || '') || 55888;
// #endregion module
