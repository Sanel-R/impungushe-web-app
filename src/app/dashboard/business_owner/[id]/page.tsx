export default async function businessOwnerDashBoardPage({params}: {
    params: {id: string}
})
{
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const data = await res.json();

    return ( <>
                <h1>Implement the business owner dashboard.</h1>
                <p>
                    ID: {params.id}
                </p>
                <p>
                    {data.id}
                </p>
            </>
        )
}