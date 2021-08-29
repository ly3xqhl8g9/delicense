// #region module
export interface Delicense {
    owner: string;
    year: string;
    text: string;
    payment?: string | object;
}


export type DelicenseOwner = Pick<
    Delicense,
    'owner' | 'payment'
>;
// #endregion module
