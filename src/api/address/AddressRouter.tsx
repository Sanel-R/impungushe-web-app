import { Address } from '@/types';

/**
 * Invoke the following endpoint: /v1/address/list : GET METHOD
 * @returns A list of address as a promise.
 */
export async function getAddressList(): Promise<Address[]> {
  const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/address/list`, 
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
 * Invoking the following endpoint: /v1/address/{id} : GET METHOD
 * @param addressId 
 * @returns a address.
 */
export async function getAddressByDriverId(addressId:number) : Promise<Address> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/address/${addressId}`, 
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
 * @param addressId 
 * @returns an address that was deleted.
 */
export async function deleteAddressById(addressId:number) : Promise<Address> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/address/${addressId}`,
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
 * @param addNewAddress 
 * @returns a new address in our database.
 */
export async function saveAddress(addNewAddress: Address) : Promise<Address>
{
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/address`, 
        {
            method: "POST",
            body: JSON.stringify(addNewAddress),
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



