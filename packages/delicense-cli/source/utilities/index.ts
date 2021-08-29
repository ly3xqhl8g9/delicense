// #region imports
    // #region libraries
    import {
        promises as fs,
    } from 'fs';

    import path from 'path';

    import Deon from '@plurid/deon';
    // #endregion libraries


    // #region external
    import {
        Delicense,
        DelicenseOwner,
    } from '../data/interfaces';
    // #endregion external
// #endregion imports



// #region module
export async function* getFiles(
    dir: any,
): any {
    const dirents = await fs.readdir(
        dir,
        { withFileTypes: true },
    );

    for (const dirent of dirents) {
        const res = path.resolve(
            dir,
            dirent.name,
        );

        if (dirent.isDirectory()) {
            yield* getFiles(res);
        } else {
            yield res;
        }
    }
}


export async function getDelicenseFiles(
    directory: string | undefined,
) {
    try {
        const dir = directory
            ? path.isAbsolute(directory)
                ? directory
                : path.join(process.cwd(), directory)
            : process.cwd();

        const licenses: string[] = [];

        for await (const filename of getFiles(dir)) {
            const basename = path.basename(filename);

            if (basename === 'LICENSE.deon') {
                licenses.push(filename);
            }
        }

        return licenses;
    } catch (error) {
        return;
    }
}


export const parseDeonFile = async (
    filepath: string,
) => {
    const deon = new Deon();

    const data = await deon.parseFile<Delicense>(filepath);

    return data;
}


export const parseDelicenses = async (
    filepaths: string[],
) => {
    const delicenses: Delicense[] = [];

    for (const filepath of filepaths) {
        const data = await parseDeonFile(filepath);

        if (data) {
            delicenses.push(data);
        }
    }

    return delicenses;
}


export const getDelicensors = async (
    delicenses: Delicense[],
) => {
    const data: Map<string, DelicenseOwner> = new Map();

    for (const delicense of delicenses) {
        const {
            owner,
            payment,
        } = delicense;

        const delicensor = {
            owner,
            payment,
        };

        data.set(
            owner,
            delicensor,
        );
    }

    return data;
}
// #endregion module
