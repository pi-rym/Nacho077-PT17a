const SearchBar = () => {
    return(
        <div>
            <input placeholder="Search..."/>
            <button onClick={() => alert('Buscando personajes...')}>BUSCAR</button>
        </div>
    )
}

export default SearchBar
