// #region imports
    // #region libraries
    import merge from 'lodash.merge';
    // #endregion libraries
// #endregion imports



// #region module
export const generateResolvers = (
    ...imports: any[]
) => {
    const resolvers = {};

    merge(
        resolvers,
        ...imports,
    );

    return resolvers;
}
// #endregion module
