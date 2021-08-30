// #region imports
    // #region libraries
    import express from 'express';
    // #endregion libraries
// #endregion imports



// #region module
const PORT = 55888;

const main = async () => {
    const server = express();

    server.listen(PORT, () => {
        console.log(`Delicense Backend Started on ${PORT}, http://localhost:${PORT}`);
    });
}


main();
// #endregion module
