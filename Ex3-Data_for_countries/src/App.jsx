import {useState, useEffect} from 'react'
import CountrySearch from './components/CountrySearch'
import countryService from './services/country'
import Result from './components/Result'


const App = () => {
  const [countriesInfo, setCountriesInfo] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(
        returnedValue => {
          setCountriesInfo(returnedValue)
        }
      )
  }, [])


  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div>
      <CountrySearch searchValue = {searchValue} handleSearchChange = {handleSearchChange}/>
      <Result searchValue = {searchValue} countriesInfo = {countriesInfo}/>
    </div>
  )
}

export default App