// #region imports
    // #region libraries
    import program, {
        CommanderStatic,
    } from 'commander';
    // #endregion libraries


    // #region external
    import analyze from '../commands/analyze';
    // #endregion external
// #endregion imports



// #region module
const main = async (
    program: CommanderStatic,
) => {
    program
        .storeOptionsAsProperties(false)
        .passCommandToAction(false);

    program
        .name('delicense')
        .version('0.0.0', '-v, --version')
        .option(
            '-o, --output <type>',
            'output type: text, deon, json',
            'text',
        ).action((options: any) => {
            analyze(
                options.output,
            );
        });


    await program.parseAsync(process.argv);
}


const cli = () => {
    main(program);
}
// #endregion module



// #region exports
export default cli;
// #endregion exports
