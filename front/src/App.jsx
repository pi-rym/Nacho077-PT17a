import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { APIKEY } from './utils.js'
import { Routes, Route, useNavigate } from 'react-router-dom'
import s from './App.module.scss'

function App() {
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  const navigate = useNavigate()

   const onLogin = (form) => {
      const EMAIL = "test@gmail.com"
      const PASS = "123456"

      if (form.password === PASS && form.mail === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

  const onSearch = (id) =>  {
      //axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(
         ({ data }) => {
            if (data.name) {
               setCharacters((prevState) => [...prevState, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      ).catch(() =>  alert("ERROR"))
   }

   const onClose = (id) => {
      setCharacters(characters.filter(character => {
         return character.id !== id
      }))
   }

   useEffect(() => {
      !access && navigate("/login")
   }, [access])

  return (
      <div>
         <Nav onSearch={onSearch} />
         
         <div className={s.containerApp}>
            <Routes>
               <Route path="/login" element={<Form onLogin={onLogin} />} />
               <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
               <Route path="/about" element={<About />} />
               <Route path="/detail/:id" element={<Detail />} />
               <Route path="/favorites" element={<Favorites />} />
            </Routes>
         </div>
      </div>
  )
}

export default App
