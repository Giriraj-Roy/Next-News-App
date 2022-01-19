function Newslist({data}) {
    return <>
        <h1>Todays News</h1>
        {
            data.articles.map(
                ele => {
                    return(
                        <ul key={ele.source.id}>
                            <li>{ele.title}</li>
                            {/* <br/> */}
                            <p>{ele.description}</p>
                            <br/>
                        </ul>
                    )
                }
            )
        }
    </>
}

export default  Newslist

export async function getStaticProps() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6bc808bd62a8489a816439a6010f91bf')
    const result = await response.json()
    console.log(result)

    return{
        props:{
            data : result,
        },
    }
}