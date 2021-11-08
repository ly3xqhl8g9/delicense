// #region imports
    // #region libraries
    import {
        uuid,
    } from '@plurid/plurid-functions';
    // #endregion libraries


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


        const ownerID = 'owner_id' + uuid.multiple(2);

        for (const delicensor of delicensors) {
            const delicensorID = uuid.multiple(3);

            const data = {
                ...delicensor,
                underOwner: ownerID,
            };

            database.addDocument(
                collections.delicensors,
                delicensorID,
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
