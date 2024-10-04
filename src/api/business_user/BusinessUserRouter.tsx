import { BusinessUser } from '@/types';

/**
 * Invoke the following endpoint: /v1/businessUser/list : GET METHOD
 * @returns A list of businessUser as a promise.
 */
export async function getBusinessUserList(): Promise<BusinessUser[]> {
  const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/businessUser/list`, 
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
 * Invoking the following endpoint: /v1/businessUser/{id} : GET METHOD
 * @param businessUserId 
 * @returns a businessUser.
 */
export async function getBusinessUserById(businessUserId:number) : Promise<BusinessUser> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/businessUserId/${businessUserId}`, 
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
 * Invoking the following endpoint: /v1/businessUser/{id} : DELETE METHOD
 * @param businessUserId 
 * @returns an businessUser that was deleted.
 */
export async function deleteBusinessUserById(businessUserId:number) : Promise<BusinessUser> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/businessUser/${businessUserId}`,
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
 * Invoking the following endpoint: /v1/businessUser/ : POST METHOD
 * @param addBusinessUser 
 * @returns a new businessUser in our database.
 */
export async function saveBusinessUser(addBusinessUser: BusinessUser) : Promise<BusinessUser>
{
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/businessUser`, 
        {
            method: "POST",
            body: JSON.stringify(addBusinessUser),
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