import { IndividualUser } from '@/types';

/**
 * Invoke the following endpoint: /v1/individualUser/list : GET METHOD
 * @returns A list of individual user as a promise. 
 */
export async function getIndividualUserList(): Promise<IndividualUser[]> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/individualUser/list`, 
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
 * Invoking the following endpoint: /v1/individualUser/{id} : GET METHOD
 * @param individualUserId 
 * @returns a individual user.
 */
export async function getIndividualUserById(individualUserId:number) : Promise<IndividualUser> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/individualUser/${individualUserId}`, 
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
 * @param individualUserId 
 * @returns a individual user deleted.
 */
export async function deleteIndividualUserById(individualUserId:number) : Promise<IndividualUser> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/individualUser/${individualUserId}`,
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
 * Invoking the following endpoint: /v1/individualUser/ : POST METHOD
 * @param addIndividualUser
 * @returns a new Individual user inserted in our database.
 */
export async function saveIndividualUser(addIndividualUser: IndividualUser) : Promise<IndividualUser> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/individualUser`, 
        {
            method: "POST",
            body: JSON.stringify(addIndividualUser),
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