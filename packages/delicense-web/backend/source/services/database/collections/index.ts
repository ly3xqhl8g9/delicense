// #region imports
    // #region libraries
    import mongodb from 'mongodb';
    // #endregion libraries


    // #region external
    import {
        database,
    } from '../connection';
    // #endregion external
// #endregion imports



// #region module
export const DELICENSE_DATABASE = process.env.DELICENSE_DATABASE || 'delicenseDB';
export const getDelicenseDatabase = async () => (await database)?.db(DELICENSE_DATABASE);


export const ADMIN_COLLECTION = 'admin';
export const getAdminCollection = async <T = any>() => (await getDelicenseDatabase())?.collection<T>(ADMIN_COLLECTION);

export const DELICENSORS_COLLECTION = 'delicensors';
export const getDelicensorsCollection = async <T = any>() => (await getDelicenseDatabase())?.collection<T>(DELICENSORS_COLLECTION);


export const getCollections = async () => {
    const admin = await getAdminCollection();
    const delicensors = await getDelicensorsCollection();

    if (
        !admin
        || !delicensors
    ) {
        return;
    }

    return {
        admin,
        delicensors,
    };
}
// #endregion module
