import { useState } from "react"

const SearchBar = ({onSearch}) => {
    const [state, setState] = useState('')

    const handleChange = (event) => {
        const { value } = event.target

        setState(value)
    }

    const handleClick = () => {
        onSearch(state)

        setState('')
    }

    // const handleSearch = () => {
    //     const inputSearch = document.querySelector("#inputSearch")
    //     onSearch(inputSearch.value)


    //     inputSearch.value = "" 
    // }

    return(
        <div className="container_searchbar">
            <input id="inputSearch" value={state} placeholder="Search..." onChange={handleChange}/>
            <button id="searchButton" onClick={handleClick}>BUSCAR</button>
        </div>
    )
}

export default SearchBar
