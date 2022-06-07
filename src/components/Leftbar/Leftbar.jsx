import React from "react";
import style from "./Leftbar.module.css"
import {NavLink} from "react-router-dom";

const Leftbar = () => {
    return (
        <nav className={style.nav}>
                <div className={style.item}>
                    <NavLink to='/classic'>
                        <button className={style.button}>Classic</button>
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/bc'>
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
                        <button className={style.button}>Mists of Pandaria</button>
                        </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/drenour' activeClassName={style.active}>
                        <button className={style.button}>Warlords of Draenor</button>
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
            <div className={style.item}>
                <NavLink to='/shadowlands' activeClassName={style.active}>
                    <button className={style.button}>Shadowlands</button>
                </NavLink>
            </div>
        </nav>
    )
}

export default Leftbar