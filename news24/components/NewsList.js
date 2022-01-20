function Newslist({articles}){
    return <>
        {   
            articles.map(
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
export default Newslist