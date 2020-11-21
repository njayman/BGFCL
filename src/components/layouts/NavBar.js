import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
    return (
        <div className="navbar">
            <NavLink to="/" >
                <div className="navbar__logo">BGFCL</div>
            </NavLink>
            <NavLink to="/" exact className="navbar__item" activeClassName="navbar__item__active">
                Dashboard
            </NavLink>
            <NavLink to="/users" className="navbar__item" activeClassName="navbar__item__active">
                Users
            </NavLink>
            <NavLink to="/settings" className="navbar__item" activeClassName="navbar__item__active">
                Settings
            </NavLink>
        </div>
    )
}
