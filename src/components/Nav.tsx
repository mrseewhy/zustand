import { NavLink } from "react-router-dom"
const Nav = () => {
    return (
        <div className="w-full h-16 gap-8 bg-black text-white font-bold text-lg flex items-center justify-center">
            <NavLink to={'/'}>Products </NavLink>
            <NavLink to={'/cart'}>Cart</NavLink>
        </div>
    )
}

export default Nav