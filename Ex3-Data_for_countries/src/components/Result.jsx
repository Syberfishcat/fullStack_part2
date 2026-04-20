import { useState, useEffect } from "react"
import countryService from "../services/country"

const WeatherInfo = ({weatherInfo}) => {
    if(weatherInfo){
        return (
            <div>
                <h2>
                    Weather in {weatherInfo.name}
                </h2>
                <p>
                    Temperature {weatherInfo.main.temp} Celsius
                </p>
                <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
                    alt="Flag"
                />
                <p>
                    Wind {weatherInfo.wind.speed} m/s
                </p>
            </div>
        )
    }else{
        return null
    }
}

const SingleCountry = ({countryInfo}) => {
    const [weatherInfo, setWeatherInfo] = useState(null)

    useEffect(() => {
        if(countryInfo && countryInfo.capital){
            setWeatherInfo(null)
            countryService
                .getWeather(countryInfo.capital[0])
                .then(returnedValue => {
                    setWeatherInfo(returnedValue)
                })
        }
    }, [countryInfo])

    if (countryInfo) {
        return (
            <div>
                <h1>
                    {countryInfo.name.common}
                </h1>
                <div>
                    {countryInfo.capital && countryInfo.capital.length > 0 ? (<>
                        Capital {countryInfo.capital[0]} <br />
                    </>): null}
                    Area {countryInfo.area}
                </div>
                <h2>
                    Languages
                </h2>
                <ul>
                    {Object.entries(countryInfo.languages || {}).map(([code, name]) => <li key={code}>{name}</li>)}
                </ul>
                <img src={countryInfo.flags.png} alt="flag" style={{width: '200px', height: 'auto'}}/>
                
                <WeatherInfo weatherInfo={weatherInfo}/>
            </div>
        )
    }else{
        return null
    }
}



const Result = ({searchValue, countriesInfo}) => {
    const [selectedCountry, setSelectedCountry] = useState(null)
    
    useEffect(()=>{
        setSelectedCountry(null)
    }, [searchValue])
    
    if(!searchValue) return null
    
    const matchedValues = countriesInfo.filter(countryInfo => 
        (countryInfo.name.common.toLowerCase().includes(searchValue.toLowerCase()) || countryInfo.name.official.toLowerCase().includes(searchValue.toLowerCase()))
    )

    const countryToShow = selectedCountry || (matchedValues.length === 1 ? matchedValues[0] : null)

    if(countryToShow) return <SingleCountry countryInfo={countryToShow} />

    if(matchedValues.length > 10) return <div>Too many matches, specify another filter</div>

    return (
        <div>
            {matchedValues.map(matchedValue => 
                <p key={matchedValue.name.common}>
                    {matchedValue.name.common}
                    <button onClick={() => {setSelectedCountry(matchedValue)}}>Show</button>
                </p>
            )}
        </div>
    )
}

export default Result