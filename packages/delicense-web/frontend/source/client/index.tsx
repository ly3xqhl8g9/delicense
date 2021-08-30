// #region imports
    // #region libraries
    import React from 'react';
    import ReactDOM from 'react-dom';
    // #endregion libraries


    // #region internal
    import Client from './Client';
    // #endregion internal
// #endregion imports



// #region module
/** Uncomment to use the service worker caching the static vendor.js and favicons */
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/service-worker.js');
// }

const delicenseApp = document.getElementById('delicense-app');


ReactDOM.hydrate(
    <Client />,
    delicenseApp,
);
// #endregion module
