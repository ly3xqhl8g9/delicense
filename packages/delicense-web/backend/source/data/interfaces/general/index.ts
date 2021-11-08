// #region imports
    // #region libraries
    import express from 'express';

    import {
        Collection,
    } from 'mongodb';
    // #endregion libraries
// #endregion imports



// #region module
export interface GraphQLRoot {};

export interface GraphQLArgsInputOf<T> {
    input: T;
};

export interface Context {
    request: express.Request;
    response: express.Response;
    collections: Collections;
};

export interface Collections {
    admin: Collection<any>;
    delicensors: Collection<any>;
}



export interface Delicensor {
    id: string;
    name: string;
    payment: string;
}
// #endregion module
