import './App.css'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'

function App() {
  return (
    <div>
      <SearchBar />
      <Cards characters={characters} />
    </div>
  )
}

export default App
