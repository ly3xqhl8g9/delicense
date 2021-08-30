// #region imports
    // #region libraries
    import gql from 'graphql-tag';
    // #endregion libraries
// #endregion imports



// #region module
const query = gql`
    extend type Query {
        getDelicensors(input: InputGetDelicensors!): ResponseGetDelicensors!
    }
`;


const mutation = gql`
    extend type Mutation {
        login(input: InputLogin!): Response!
        logout(input: InputLogout!): Response!

        uplink(input: InputUplink!): Response!
    }
`;


const types = gql`
    type ResponseGetDelicensors {
        status: Boolean!
        error: Error
        data: [Delicensor!]
    }

    type Delicensor {
        id: String
        name: String!
        payment: String!
    }
`;


const inputs = gql`
    input InputLogin {

    }

    input InputLogout {

    }


    input InputUplink {
        delicensors: [InputDelicensor!]
    }

    input InputDelicensor {
        id: String
        name: String!
        payment: String!
    }
`;
// #endregion module



// #region exports
export default gql`
    ${query}
    ${mutation}
    ${types}
    ${inputs}
`;
// #endregion exports
