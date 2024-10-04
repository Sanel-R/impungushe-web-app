import {Applications} from "@/types/index";

/**
 * Invoke the following endpoint: /applications/list : GET METHOD
 * @returns A list of applications as a promise.
 */
export async function getListOfApplications() : Promise<Applications[]>
{
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/applications/list`,
        {
            method: "GET",
            headers: 
            {
                'Content-Type': 'application/json',
                'X-identity-type': `${process.env.X_IDENTITY_TYPE}`,
                'X-Source-Application': `${process.env.IMPUNGUSHE_WEB}`,
            },
            redirect: "follow"
        }
    );

    return res.json();
}

/**
 * Invoking the following endpoint: /v1/applications/{id} : GET METHOD
 * @param ApplicationsId 
 * @returns applications by id.
 */
export async function getApplicationById(ApplicationsId:number) : Promise<Applications> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/Applications/${ApplicationsId}`, 
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
 * Invoking the following endpoint: /v1/address/{id} : DELETE METHOD
 * @param ApplicationsId 
 * @returns applications id that was deleted.
 */
export async function deleteApplicationById(ApplicationsId:number) : Promise<Applications> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/Applications/${ApplicationsId}`,
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
 * Invoking the following endpoint: /v1/address/ : POST METHOD
 * @param addNewApplication 
 * @returns a new address in our database.
 */
export async function saveApplcations(addNewApplication: Applications) : Promise<Applications>
{
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/address`, 
        {
            method: "POST",
            body: JSON.stringify(addNewApplication),
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