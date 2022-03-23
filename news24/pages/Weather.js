import WeatherMap from "../components/WeatherMap";

function weather({data}){
    return<>
        {
            // data.coord.lon
            <WeatherMap data={data.coord}/>
        }
        <hr/>
    </>
}

export default weather

export async function getStaticProps(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=df1fc24f8c46979b57132607828583aa")
    const result = await response.json()
    console.log(result);

    return {
        props : {
            data : result,
        },
    }
}