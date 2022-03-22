function Weather({data}){
    return<>
        <div>

        </div>
        <hr/>
    </>
}

export default Weather

export async function getStaticProps(){
    const response = await fetch("http://api.weatherapi.com/v1/current.json")
    const result = await response.json()
    console.log(result);

    return {
        props : {
            data : result,
        },
    }
}