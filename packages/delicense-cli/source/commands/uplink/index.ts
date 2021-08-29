// #region imports
    // #region libraries
    import path from 'path';
    // #endregion libraries


    // #region external
    import analyze from '~commands/analyze';
    // #endregion external
// #endregion imports



// #region module
const uplink = async (
    directory: string = process.cwd(),
) => {
    directory = path.isAbsolute(directory)
        ? directory
        : path.join(process.cwd(), directory);

    const delicensors = await analyze(directory);
    if (!delicensors) {
        console.log('\n\tNo delicensors to uplink.\n');
        return;
    }

    const delicensorsList = delicensors.map(delicensor => delicensor.owner);
    console.log(`\n\tUplinking delicensors:\n\t  ${delicensorsList.join('\n\t  ')}\n`);


    // call delicense.org API with `delicensors`
}
// #endregion module



// #region exports
export default uplink;
// #endregion exports
