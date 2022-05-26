import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <div>
                    <NavLink to='/classic' activeClassName={style.active}>Classic</NavLink>
                </div>
                <div>
                    <NavLink to='/bc' activeClassName={style.active}>Burning Crusader</NavLink>
                </div>
                <div>
                    <NavLink to='/wotlk' activeClassName={style.active}>Lich King</NavLink>
                </div>
                <div>
                    <NavLink to='/pand' activeClassName={style.active}>Pandaria</NavLink>
                </div>
                <div>
                    <NavLink to='/drenour' activeClassName={style.active}>Drenour</NavLink>
                </div>
                <div>
                    <NavLink to='/legion' activeClassName={style.active}>Legion</NavLink>
                </div>
                <div>
                    <NavLink to='/bfa' activeClassName={style.active}>BFA</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default navbar