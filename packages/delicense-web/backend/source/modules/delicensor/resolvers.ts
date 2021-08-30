// #region imports
    // #region external
    import {
        generateResolvers,
    } from '~utilities/graphql';
    // #endregion external


    // #region internal
    import account from './account/resolvers';
    // #endregion internal
// #endregion imports



// #region module
const resolvers = generateResolvers(
    account,
);
// #endregion module



// #region exports
export default resolvers;
// #endregion exports
