import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import s from './Nav.module.scss'

const Nav = ({onSearch}) => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
    <div className={s.containerNav}>
        <button onClick={() => navigate('/home')}>HOME</button>
        <button onClick={() => navigate('/about')}>ABOUT</button>
        <button onClick={() =>  navigate('/favorites')}>FAVORITES</button>
        <button onClick={() => navigate(-1)}>Back</button>
        {location.pathname === "/home" && <SearchBar onSearch={onSearch} />}
    </div>
    )
}

export default Nav