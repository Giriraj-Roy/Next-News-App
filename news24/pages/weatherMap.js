import WeatherMap from "../components/WeatherMap";

function weatherMap({data}){
    return<>
        {
            // data.coord.lon
            data.weather.map((ele) => {
                return (<div key={ele.id}>{ele.description}</div>)
            })
            // <WeatherMap main={data}/>
        }
        <hr/>
    </>
}

export default weatherMap

export async function getStaticProps(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=df1fc24f8c46979b57132607828583aa")
    const result = await response.json()
    console.log(result.main);

    return {
        props : {
            data: result,
        },
    }
}