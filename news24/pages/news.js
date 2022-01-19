function Newslist({data}) {
    return <>
        <h1>Todays News</h1>
        {
            data.map(
                ele => {
                    return(
                        <div key={ele.id}>
                        </div>
                    )
                }
            )
        }
    </>
}

export default  Newslist

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const result = await response.json()
    console.log(result)

    return{
        props:{
            data : result,
        },
    }
}