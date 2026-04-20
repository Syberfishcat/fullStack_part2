const CountrySearch = ({searchValue, handleSearchChange}) => {
    return (
        <p>
            find countries&nbsp;<input value = {searchValue} onChange = {handleSearchChange}/>
        </p>
    )
}

export default CountrySearch