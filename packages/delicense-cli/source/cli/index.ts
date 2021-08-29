// #region imports
    // #region libraries
    import {
        program,
    } from 'commander';
    // #endregion libraries


    // #region external
    import analyze from '~commands/analyze';
    import login from '~commands/login';
    import logout from '~commands/logout';
    import uplink from '~commands/uplink';
    // #endregion external
// #endregion imports



// #region module
const cli = async () => {
    program
        .storeOptionsAsProperties(false);

    program
        .name('delicense')
        .version('0.0.0-0', '-v, --version');

    program
        .command('analyze [directory]')
        .description('obtains the delicensors under the directory')
        .option(
            '-o, --output <type>',
            'output type: text, deon, json',
            'text',
        )
        .action((
            directory,
            options: any,
        ) => {
            const {
                output,
            } = options;

            analyze(
                directory,
                output,
            );
        });

    program
        .command('login')
        .description('log into delicense.org')
        .requiredOption(
            '-i, --identonym <value>',
            'account identonym',
        )
        .requiredOption(
            '-k, --key <value>',
            'account key',
        )
        .action((options) => {
            const {
                identonym,
                key,
            } = options;

            login(
                identonym,
                key,
            );
        });

    program
        .command('logout')
        .description('log out of delicense.org')
        .action(() => {
            logout();
        });

    program
        .command('uplink [directory]')
        .description('uploads the delicensors under the directory and links them to the delicense.org vault')
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
