// #region imports
    // #region libraries
    import Deon from '@plurid/deon';
    // #endregion libraries


    // #region external
    import {
        DelicenseOwner,
    } from '../data/interfaces';

    import {
        getDelicenseFiles,
        parseDelicenses,
        getDelicensors,
    } from '../utilities';
    // #endregion external
// #endregion imports



// #region module
/**
 * Analyzes the given directory, or the current working directory,
 * for delicenses and outputs them (`'text' | 'deon' | 'json' | 'programmatic'`).
 *
 * @param directory
 * @param output
 */
const analyze = async (
    directory: string | undefined,
    output: 'text' | 'deon' | 'json' | 'programmatic' = 'programmatic',
) => {
    const files = await getDelicenseFiles(directory);
    if (!files) {
        return;
    }

    const delicenses = await parseDelicenses(files);
    const delicensors = await getDelicensors(delicenses);

    if (output === 'text') {
        if (delicensors.size === 0) {
            console.log('\n\tNo delicensors.\n');
            return;
        }

        console.log('\n\tDelicensors:\n');

        for (const [_, delicensor] of delicensors.entries()) {
            const {
                owner,
                payment,
            } = delicensor;

            const paymentString = typeof payment === 'undefined'
                ? 'no payment details'
                : typeof payment === 'string'
                    ? payment
                    : JSON.stringify(payment, null, 12).replace('}', '\t}');

            console.log(`\t${owner} - ${paymentString}`);
        }

        console.log('');
        return;
    }

    const list: DelicenseOwner[] = Array
        .from(delicensors)
        .map(([_, value]) => ({...value}));

    if (output === 'deon') {
        const deon = new Deon();
        const data = deon.stringify(list);

        console.log(data);
        return;
    }

    if (output === 'json') {
        console.log(JSON.stringify(list, null, 4));
        return;
    }

    if (output === 'programmatic') {
        return list;
    }

    return;
}
// #endregion module



// #region exports
export default analyze;
// #endregion exports
