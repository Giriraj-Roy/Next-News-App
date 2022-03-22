import Navbar from "./Navbar"

function NewsList({articles}){
    return <>
        <Navbar/>
        <h3>Todays News</h3>
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
export default NewsList