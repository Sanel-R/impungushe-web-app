import { JobPost } from '@/types';

/**
 * Invoke the following endpoint: /v1/jobPost/list : GET METHOD
 * @returns A list of job post as a promise. 
 */
export async function getjobPostList(): Promise<JobPost[]> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/jobPost/list`, 
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
 * Invoking the following endpoint: /v1/jobPost/{id} : GET METHOD
 * @param jobPostId 
 * @returns a job post id.
 */
export async function getJobPostById(jobPostId:number) : Promise<JobPost> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/jobPost/${jobPostId}`, 
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
 * Invoking the following endpoint: /v1/jobPost/{id} : DELETE METHOD
 * @param jobPostId 
 * @returns a individual user deleted.
 */
export async function deleteIndividualUserById(jobPostId:number) : Promise<JobPost> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/jobPost/${jobPostId}`,
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
 * Invoking the following endpoint: /v1/jobPost/ : POST METHOD
 * @param addjobPost
 * @returns a new Individual user inserted in our database.
 */
export async function savejobPost(addjobPost: JobPost) : Promise<JobPost> {
    const res = await fetch(`${process.env.IMPUNGUSHE_CAREERS_API_URL}/v1/jobPost`, 
        {
            method: "POST",
            body: JSON.stringify(addjobPost),
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