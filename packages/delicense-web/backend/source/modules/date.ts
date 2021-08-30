// #region imports
    // #region libraries
    import { GraphQLScalarType } from 'graphql';
    import { Kind } from 'graphql/language';
    // #endregion libraries
// #endregion imports



// #region module
// https://stackoverflow.com/a/49694083
const resolverMap = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return value; // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return parseInt(ast.value, 10); // ast value is always in string format
            }
            return null;
        },
    }),
}
// #endregion module



// #region exports
export default resolverMap;
// #endregion exports
