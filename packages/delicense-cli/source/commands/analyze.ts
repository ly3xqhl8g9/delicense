// #region imports
    // #region libraries
    import Deon from '@plurid/deon';
    // #endregion libraries


    // #region external
    import {
        getLicenseFiles,
        parseLicenses,
        getLicensors,
    } from '../utilities';
    // #endregion external
// #endregion imports



// #region module
const analyze = async (
    directory: string | undefined,
    output: string,
) => {
    const files = await getLicenseFiles(directory);

    if (!files) {
        return;
    }

    const licenses = await parseLicenses(files);
    const licensors = await getLicensors(licenses);

    if (output === 'text') {
        if (licensors.size === 0) {
            console.log('\n\tNo licensors.\n');
            return;
        }

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
        return;
    }

    const list: any[] = Array
        .from(licensors)
        .map(([_, value]) => ({...value}));

    if (output === 'deon') {
        const deon = new Deon();
        const data = deon.stringify(list);

        console.log(data);
        return;
    }

    if (output === 'json') {
        console.log(JSON.stringify(list));
        return;
    }
}
// #endregion module



// #region exports
export default analyze;
// #endregion exports
