import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
      </div>

      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/dialogs' className={navDate => navDate.isActive ? s.active : s.item}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>

      <div className={s.item}>
        <a>Music</a>
      </div>

      <div>
        <div className={s.item}>
          <a>Settings</a>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;