import SearchBar from '../SearchBar/SearchBar.jsx'
import s from './Nav.module.scss'

const Nav = ({onSearch}) => {
    return (
    <div className={s.containerNav}>
        <SearchBar onSearch={onSearch} />
    </div>
    )
}

export default Nav