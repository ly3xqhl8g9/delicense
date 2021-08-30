// #region imports
    // #region libraries
    import gql from 'graphql-tag';
    // #endregion libraries
// #endregion imports



// #region module
const query = gql`
    type A {
        _: Boolean
    }
`;


const mutation = gql`
    type B {
        _: Boolean
    }
`;


const types = gql`
    type C {
        _: Boolean
    }
`;


const inputs = gql`
    type D {
        _: Boolean
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
