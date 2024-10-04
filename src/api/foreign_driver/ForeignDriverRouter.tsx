import { ForeignDriver } from '@/types';

/**
 * Invoke the following endpoint: /v1/foreignDriver/list : GET METHOD
 * @returns A list of foreign driver as a promise. 
 */
export async function getForeignDriverList(): Promise<ForeignDriver[]> {
  const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/foreignDriver/list`, 
            {
                method: "GET",
                headers: 
                {
                    'Content-Type': 'application/json',
                    'X-identity-type': `${process.env.X_IDENTITY_TYPE}`,
                    'X-Source-Application': `${process.env.IMPUNGUSHE_WEB}`,
                },
                redirect: "follow"
            });

   return res.json();
}

/**
 * Invoking the following endpoint: /v1/foreignDriver/{id} : GET METHOD
 * @param foreignId 
 * @returns a foreign id.
 */
export async function getForeignDriverById(foreignId:number) : Promise<ForeignDriver> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/foreignDriver/${foreignId}`, 
        {
            method: "GET",
            headers: 
            {
                'Content-Type': 'application/json',
                'X-identity-type': `${process.env.X_IDENTITY_TYPE}`,
                'X-Source-Application': `${process.env.IMPUNGUSHE_WEB}`,
            },
            redirect: "follow"
        });
    return res.json();
}

/**
 * Invoking the following endpoint: /v1/driver/{id} : DELETE METHOD
 * @param foreignId 
 * @returns a foreign driver that was deleted.
 */
export async function deleteForeignDriverById(foreignId:number) : Promise<ForeignDriver> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/foreignDriver/${foreignId}`,
        {
            method: "DELETE",
            headers: 
            {
                'Content-Type': 'application/json',
                'X-identity-type': `${process.env.X_IDENTITY_TYPE}`,
                'X-Source-Application': `${process.env.IMPUNGUSHE_WEB}`,
            },
            redirect: "follow"
        });

    return res.json();
}

/**
 * Invoking the following endpoint: /v1/driver/ : POST METHOD
 * @param addForeignDriver 
 * @returns a new driver in our database.
 */
export async function saveDriver(addForeignDriver: ForeignDriver) : Promise<ForeignDriver> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/foreignDriver`, 
        {
            method: "POST",
            body: JSON.stringify(addForeignDriver),
            headers: 
            {
                'Content-Type': 'application/json',
                'X-identity-type': `${process.env.X_IDENTITY_TYPE}`,
                'X-Source-Application': `${process.env.IMPUNGUSHE_WEB}`,
            },
            redirect: "follow"
        });
    return res.json();
}