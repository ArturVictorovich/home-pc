import {Outlet} from "react-router-dom"
import Menu from "../components/Menu"

export const MainLoyaut = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}
