// #region imports
    // #region external
    import {
        GraphQLRoot,
        GraphQLArgsInputOf,
        Context,
    } from '~data/interfaces';

    import {
        Delicensor,
    } from '~logic/index';
    // #endregion external
// #endregion imports



// #region module
export default {
    login: async (
        _: GraphQLRoot,
        { input }: GraphQLArgsInputOf<any>,
        context: Context,
    ) => Delicensor.Account.login(
        input,
        context,
    ),
    logout: async (
        _: GraphQLRoot,
        { input }: GraphQLArgsInputOf<any>,
        context: Context,
    ) => Delicensor.Account.logout(
        input,
        context,
    ),

    generate: async (
        _: GraphQLRoot,
        { input }: GraphQLArgsInputOf<any>,
        context: Context,
    ) => Delicensor.Account.generate(
        input,
        context,
    ),
    obliterate: async (
        _: GraphQLRoot,
        { input }: GraphQLArgsInputOf<any>,
        context: Context,
    ) => Delicensor.Account.obliterate(
        input,
        context,
    ),

    uplink: async (
        _: GraphQLRoot,
        { input }: GraphQLArgsInputOf<any>,
        context: Context,
    ) => Delicensor.Account.uplink(
        input,
        context,
    ),
};
// #endregion module
