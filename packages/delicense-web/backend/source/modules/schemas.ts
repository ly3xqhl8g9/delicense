// #region imports
    // #region libraries
    import {
        gql,
    } from 'apollo-server-express';
    // #endregion libraries


    // #region internal
    import Owner from './owner/schemas';
    // #endregion internal
// #endregion imports



// #region module
const baseSchema = gql`
    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }

    # type Subscription {
    #     _: Boolean
    # }

    scalar Date

    type Response {
        status: Boolean!
        error: Error
    }

    type Error {
        path: String!
        message: String!
    }
`;


const commonSchemas: any[] = [

];


const schemas = [
    baseSchema,

    ...commonSchemas,

    ...Owner,
];
// #endregion module



// #region exports
export default schemas;
// #endregion exports
