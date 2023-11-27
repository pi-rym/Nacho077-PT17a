import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import { useState } from 'react'
import axios from 'axios'
import { APIKEY } from './utils.js'
import { Routes, Route } from 'react-router-dom'
import s from './App.module.scss'

function App() {
  const [characters, setCharacters] = useState([])

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
         <Nav onSearch={onSearch} />
         
         <div className={s.containerApp}>
            <Routes>
               <Route path="/" element={<Cards characters={characters} onClose={onClose} />} />
               <Route path="/about" element={<About />} />
               <Route path="/detail/:id" element={<Detail />} />
            </Routes>
         </div>
      </div>
  )
}

export default App
