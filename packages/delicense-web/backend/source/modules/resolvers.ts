// #region imports
    // #region external
    import {
        generateResolvers,
    } from '~utilities/graphql';
    // #endregion external


    // #region internal
    import delicensor from './delicensor/resolvers';

    import dateResolver from './general/date';
    // #endregion internal
// #endregion imports



// #region module
const resolvers = generateResolvers(
    delicensor,
    dateResolver,
);
// #endregion module



// #region exports
export default resolvers;
// #endregion exports
