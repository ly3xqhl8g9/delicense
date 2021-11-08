// #region imports
    // #region external
    import {
        InputUplink,
        Context,
    } from '~data/interfaces';

    import database from '@plurid/dataface-mongo';
    // #endregion external
// #endregion imports



// #region module
const uplink = async (
    input: InputUplink,
    context: Context,
) => {
    try {
        const {
            collections,
        } = context;

        const {
            delicensors,
        } = input;


        const ownerID = 'unaccounted_owner_id';

        for (const delicensor of delicensors) {
            const data = {
                ...delicensor,
                underOwner: ownerID
            };

            database.addDocument(
                collections.delicensors,
                'one',
                {
                    ...data,
                },
            );
        }


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
