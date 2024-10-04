import { LocalDriver } from '@/types';

/**
 * Invoke the following endpoint: /v1/localDriver/list : GET METHOD
 * @returns A list of local driver as a promise. 
 */
export async function getLocalDriverList(): Promise<LocalDriver[]> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/localDriver/list`, 
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
 * Invoking the following endpoint: /v1/localDriver/{id} : GET METHOD
 * @param localDriverId 
 * @returns a local driver id.
 */
export async function getLocalDriverById(localDriverId:number) : Promise<LocalDriver> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/localDriver/${localDriverId}`, 
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
 * Invoking the following endpoint: /v1/localDriver/{id} : DELETE METHOD
 * @param localDriverId 
 * @returns a local driver deleted. 
 */
export async function deleteLocalDriverById(localDriverId:number) : Promise<LocalDriver> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/localDriver/${localDriverId}`,
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
 * Invoking the following endpoint: /v1/localDriver/ : POST METHOD
 * @param addLocalDriver
 * @returns a new local driver inserted in our database.
 */
export async function saveLocalDriver(addLocalDriver: LocalDriver) : Promise<LocalDriver> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/localDriver`, 
        {
            method: "POST",
            body: JSON.stringify(addLocalDriver),
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