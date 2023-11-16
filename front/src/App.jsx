import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [characters, setCharacters] = useState([])
  const APIKEY = 'henrystaff'

  const onSearch = (id) =>  {
      axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
      .then(
         ({ data }) => {
            if (data.name) {
               setCharacters((prevState) => [...prevState, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }

   const onClose = (id) => {
      setCharacters(characters.filter(character => {
         return character.id !== id
      }))
   }

  return (
    <div>
      <div className="nav">
         <Nav onSearch={onSearch} />
      </div>
      <Cards characters={characters} onClose={onClose} />
    </div>
  )
}

export default App
