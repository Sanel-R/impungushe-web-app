import { Vehicle } from '@/types';

/**
 * Invoke the following endpoint: /v1/vehicle/list : GET METHOD.
 * 
 * @returns A list of local driver as a promise. 
 */
export async function getVehicleList(): Promise<Vehicle[]> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/vehicle/list`, 
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
 * Invoking the following endpoint: /v1/vehicle/{id} : GET METHOD.
 * 
 * @param vehicleId 
 * @returns a vehicle instance.
 */
export async function getVehicleById(vehicleId:number) : Promise<Vehicle> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/vehicle/${vehicleId}`, 
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
 * Invoking the following endpoint: /v1/vehicle/{id} : DELETE METHOD.
 * 
 * @param vehicleId
 * @returns a vehicle deleted. 
 */
export async function deleteVehicleById(vehicleId:number) : Promise<Vehicle> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/vehicle/${vehicleId}`,
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
 * Invoking the following endpoint: /v1/vehicle/ : POST METHOD.
 * 
 * @param addVehicle
 * @returns a vehicle inserted in our database.
 */
export async function saveVehicle(addVehicle: Vehicle) : Promise<Vehicle> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/vehicle`, 
        {
            method: "POST",
            body: JSON.stringify(addVehicle),
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