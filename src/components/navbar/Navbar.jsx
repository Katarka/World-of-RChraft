import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const navbar = () => {
    return (
        <nav className={style.nav}>
                <div className={style.item}>
                    <NavLink to='/classic' activeClassName={style.active}>
                        <button className={style.button}>Classic</button>
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/bc' activeClassName={style.active}>
                        <button className={style.button}>Burning Crusader</button>
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/wotlk' activeClassName={style.active}>
                        <button className={style.button}>Lich King</button>
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/pand' activeClassName={style.active}>
                        <button className={style.button}>Pandaria</button>
                        </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/drenour' activeClassName={style.active}>
                        <button className={style.button}>Drenour</button>
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/legion' activeClassName={style.active}>
                        <button className={style.button}>Legion</button>
                        </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/bfa' activeClassName={style.active}>
                        <button className={style.button}>BFA</button>
                    </NavLink>
                </div>
        </nav>
    )
}

export default navbar