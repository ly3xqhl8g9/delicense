// #region imports
    // #region external
    import {
        InputUplink,
        Context,
    } from '~data/interfaces';
    // #endregion external
// #endregion imports



// #region module
const uplink = async (
    input: InputUplink,
    context: Context,
) => {
    try {
        const {
            delicensors,
        } = input;

        return {
            status: true,
        };
    } catch (error) {
        return {
            status: false,
        };
    }
}
// #endregion module



// #region exports
export default uplink;
// #endregion exports
