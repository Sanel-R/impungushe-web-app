import { BusinessOwner, VehicleOwnerDTO } from "@/types";

/**
 * Invoking the following endpoint: /v1/businessOwner/getVehicleOwnedByBusiness/{id} : GET METHOD
 * @param BusinessOwnerId 
 * @returns businessOwner by id.
 */
export async function getVehicleOwnedByBusiness(BusinessOwnerId:number) : Promise<VehicleOwnerDTO> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/businessOwner/getVehicleOwnedByBusiness/${BusinessOwnerId}`, 
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
 * Invoke the following endpoint: /businessOwner/list : GET METHOD
 * @returns A list of businessOwner as a promise.
 */
export async function getListOfBusinessOwner() : Promise<BusinessOwner[]> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/businessOwner/list`,
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
 * Invoking the following endpoint: /v1/businessOwner/{id} : GET METHOD
 * @param BusinessOwnerId 
 * @returns businessOwner by id.
 */
export async function getBusinessOwnerById(BusinessOwnerId:number) : Promise<BusinessOwner> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/businessOwner/${BusinessOwnerId}`, 
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
 * Invoking the following endpoint: /v1/businessOwner/{id} : DELETE METHOD
 * @param BusinessOwnerId 
 * @returns businessOwner id that was deleted.
 */
export async function deleteBusinessOwnerById(BusinessOwnerId:number) : Promise<BusinessOwner> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/businessOwner/${BusinessOwnerId}`,
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
 * Invoking the following endpoint: /v1/BusinessOwner/ : POST METHOD
 * @param addNewBusinessOwner
 * @returns a new businessOwner in our database.
 */
export async function saveBusinessOwner(addNewBusinessOwner: BusinessOwner) : Promise<BusinessOwner> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/businessOwner`, 
        {
            method: "POST",
            body: JSON.stringify(addNewBusinessOwner),
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