const CountrySearch = ({searchValue, handleSearchChange}) => {
    return (
        <p>
            find countries 
            <input value = {searchValue} onChange = {handleSearchChange}/>
        </p>
    )
}

export default CountrySearch