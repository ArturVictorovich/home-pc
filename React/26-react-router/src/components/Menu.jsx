import {NavLink} from "react-router-dom"

export const Menu = () => {
  return (
    <nav>
      <NavLink
        className={({isActive}) => (isActive ? "activeLink" : "link")}
        to="."
        end>
        Home
      </NavLink>
      <NavLink to="contacts">Contacts</NavLink>
      <NavLink to="about">About</NavLink>
    </nav>
  )
}

export default Menu
