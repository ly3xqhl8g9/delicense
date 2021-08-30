// #region imports
    // #region external
    import {
        generateResolvers,
    } from '../utilities/resolvers';
    // #endregion external


    // #region internal
    import Owner from './owner/resolvers';

    import dateResolver from './date';
    // #endregion internal
// #endregion imports



// #region module
const resolvers = generateResolvers(
    Owner,
    dateResolver,
);
// #endregion module



// #region exports
export default resolvers;
// #endregion exports
