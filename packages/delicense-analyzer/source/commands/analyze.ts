// #region imports
    import {
        getLicenseFiles,
        parseLicenses,
        getLicensors,
    } from '../utilities';
// #endregion imports



// #region module
const analyze = async () => {
    const files = await getLicenseFiles();
    const licenses = await parseLicenses(files);
    const licensors = await getLicensors(licenses);

    console.log('licensors', licensors);
}
// #endregion module



// #region exports
export default analyze;
// #endregion exports
