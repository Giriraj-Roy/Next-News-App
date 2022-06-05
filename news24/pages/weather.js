import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function weather({data}){
    let ele = data.main
    return<>
    <Navbar/>
        {
            // data.coord.lon
            // data.weather.map((ele) => {
            //     return (<div key={ele.id}>{ele.description}</div>)
            // })
            
                    <div>
                        <ul>
                            <li><h2>Temperature : {ele.temp}</h2></li>
                            <li>Feels Like : {ele.feels_like}</li>
                            <li>Min Temp : {ele.temp_min}</li>
                            <li>Max Temp : {ele.temp_max}</li>
                            <li>Pressure : {ele.pressure}</li>
                            <li>Humidity : {ele.humidity}</li>
                        </ul>
                    </div>
                
            
        }
        <hr/>
        <Footer/>
    </>
}

export default weather

export async function getStaticProps(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=df1fc24f8c46979b57132607828583aa")
    const result = await response.json()

    return {
        props : {
            data: result,
        },
    }
}