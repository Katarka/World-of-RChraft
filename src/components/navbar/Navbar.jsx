import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const navbar = () => {
    return (
        <nav className={style.nav}>
                <div className={style.item}>
                    <NavLink to='/classic' activeClassName={style.active}>Classic</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/bc' activeClassName={style.active}>Burning Crusader</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/wotlk' activeClassName={style.active}>Lich King</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/pand' activeClassName={style.active}>Pandaria</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/drenour' activeClassName={style.active}>Drenour</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/legion' activeClassName={style.active}>Legion</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/bfa' activeClassName={style.active}>BFA</NavLink>
                </div>
        </nav>
    )
}

export default navbar