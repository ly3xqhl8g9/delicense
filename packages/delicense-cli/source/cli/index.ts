// #region imports
    // #region libraries
    import {
        program,
    } from 'commander';
    // #endregion libraries


    // #region external
    import analyze from '~commands/analyze';
    import uplink from '~commands/uplink';
    // #endregion external
// #endregion imports



// #region module
const cli = async () => {
    program
        .storeOptionsAsProperties(false);

    program
        .name('delicense')
        .arguments('[directory]')
        .version('0.0.0-0', '-v, --version')
        .option(
            '-o, --output <type>',
            'output type: text, deon, json',
            'text',
        ).action((
            directory,
            options: any,
        ) => {
            analyze(
                directory,
                options.output,
            );
        });

    program
        .command('uplink [directory]')
        .description('uploads the delicensors from the directory and links them to delicense.org')
        .action((directory) => {
            uplink(directory);
        });


    await program
        .parseAsync(process.argv);
}
// #endregion module



// #region exports
export default cli;
// #endregion exports
