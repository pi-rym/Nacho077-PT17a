import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route, useNavigate } from 'react-router-dom'
import s from './App.module.scss'
import { useSelector } from 'react-redux'

const URL = "http://localhost:3001/rickandmorty"

function App() {
  const [characters, setCharacters] = useState([]) // new Set()
  const [access, setAccess] = useState(false)
  const navigate = useNavigate()
  const error = useSelector(state => state.error)

   const onLogin = (form) => {
      axios(`${URL}/users/login?email=${form.mail}&password=${form.password}`)
      .then(({data}) => {
         if(data.access) {
            setAccess(true);
            navigate('/home');
         } else {
            alert('Datos incorrectos')
         }
      })
   }

  const onSearch = async (id) =>  {
   // const oldCharactersLength = characters.size()
   // characters.add()
   // if(characters.size() !== oldCharactersLength) window.alert(...)
      if(characters.some(char => char.id == id)) {
         return window.alert("Personaje ya existe")
      }

      //axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            setCharacters((prevState) => [...prevState, data]); // setCharacters(characters.add(data))
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }catch(error){
         alert("ERROR")
      }
   }

   const onClose = (id) => {
      setCharacters(characters.filter(character => {
         return character.id !== id
      }))
   }

   useEffect(() => {
      !access && navigate("/login")
   }, [access])

   useEffect(() => {
      error && window.alert(error)
   }, [error])

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
