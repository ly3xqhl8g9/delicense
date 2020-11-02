// #region imports
    // #region libraries
    import {
        promises as fs,
    } from 'fs';

    import path from 'path';

    import Deon from '@plurid/deon';
    // #endregion libraries
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


export async function getLicenseFiles(
    directory: string | undefined,
) {
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
}


export const parseDeonFile = async (
    filepath: string,
) => {
    const deon = new Deon();

    const data: any = await deon.parseFile(filepath);

    return data;
}


export const parseLicenses = async (
    filepaths: string[],
) => {
    const licenses: any[] = [];

    for (const filepath of filepaths) {
        const data = await parseDeonFile(filepath);
        licenses.push(data);
    }

    return licenses;
}


export const getLicensors = async (
    licenses: any[],
) => {
    const data: Map<string, any> = new Map();

    for (const license of licenses) {
        const {
            owner,
            payment,
        } = license;

        const licensor = {
            owner,
            payment,
        };

        data.set(
            owner,
            licensor,
        );
    }

    return data;
}
// #endregion module
