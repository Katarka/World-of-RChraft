import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import style from "./Leftbar.module.scss"

const Leftbar = () => {
    return (
        <nav className={style.nav}>
            <NavLink to='/classic'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Classic
            </NavLink>

            <NavLink to='/bc'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                The Burning Crusade
            </NavLink>

            <NavLink to='/wotlk'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Wrath of the Lich King
            </NavLink>

            <NavLink to='/pand'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Mists of Pandaria
            </NavLink>

            <NavLink to='/drenour'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Warlords of Draenor
            </NavLink>

            <NavLink to='/legion'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Legion
            </NavLink>

            <NavLink to='/bfa'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Battle for Azeroth
            </NavLink>

            <NavLink to='/shadowlands'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Shadowlands
            </NavLink>
        </nav>
    )
}

export default Leftbar