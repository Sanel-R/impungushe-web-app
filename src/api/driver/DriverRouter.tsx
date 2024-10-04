import { Driver, DriverApplicationsDTO } from '@/types';

/**
 * All the applications that a particular driver has made.
 * @param driverId 
 * @returns a driver applications data transfer object.
 */
export async function getDriverApplicationsById(driverId:number) : Promise<DriverApplicationsDTO> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/driver/getDriverApplicationsById/${driverId}`, 
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
 * Invoke the following endpoint: /v1/driver/list : GET METHOD
 * @returns A list of driver as a promise.
 */
export async function getDriverList(): Promise<Driver[]> {
  const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/driver/list`, 
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
 * Invoking the following endpoint: /v1/driver/{id} : GET METHOD
 * @param driverId 
 * @returns a driver.
 */
export async function getDriverById(driverId:number) : Promise<Driver> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/businessUserId/${driverId}`, 
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
 * @param driverId 
 * @returns a driver that was deleted.
 */
export async function deleteDriverById(driverId:number) : Promise<Driver> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/businessUser/${driverId}`,
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
 * @param addDriver 
 * @returns a new driver in our database.
 */
export async function saveDriver(addDriver: Driver) : Promise<Driver> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/driver`, 
        {
            method: "POST",
            body: JSON.stringify(addDriver),
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