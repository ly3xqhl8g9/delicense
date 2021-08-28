// #region imports
    // #region libraries
    import React from 'react';

    import {
        PluridLink,
        PluridRouterLink,
        PluridReactComponent,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import delicenseLogo from './assets/delicense-logo.png';
    // #endregion external


    // #region internal
    import {
        StyledPage,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
const Page: PluridReactComponent<{}> = (
    properties,
) => {
    /** properties */
    // const {
    //     plurid,
    // } = properties;


    /** render */
    return (
        <StyledPage>
            <div>
                <a
                    href="https://delicense.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={delicenseLogo} alt="delicense logo" height={250} />
                </a>
            </div>

            <h1>
                Dispersal Framework for Delicensed Data
            </h1>
        </StyledPage>
    );
}
// #endregion module



// #region exports
export default Page;
// #endregion exports
