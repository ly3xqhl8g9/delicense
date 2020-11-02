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

    console.log('\n\tLicensors:\n');

    for (const [_, licensor] of licensors.entries()) {
        const {
            owner,
            payment,
        } = licensor;

        const paymentString = payment || 'no payment details';

        console.log(`\t${owner} - ${paymentString}`);
    }

    console.log('');
}
// #endregion module



// #region exports
export default analyze;
// #endregion exports
