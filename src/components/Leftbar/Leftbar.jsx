import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import style from "./Leftbar.module.scss"

const Leftbar = () => {
    return (
        <nav className={style.nav}>
            <NavLink to='/randomizer/classic'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Classic
            </NavLink>

            <NavLink to='/randomizer/bc'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                The Burning Crusade
            </NavLink>

            <NavLink to='/randomizer/wotlk'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Wrath of the Lich King
            </NavLink>

            <NavLink to='/randomizer/cataclysm'
                     className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Cataclysm
            </NavLink>

            <NavLink to='/randomizer/pand'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Mists of Pandaria
            </NavLink>

            <NavLink to='/randomizer/drenour'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Warlords of Draenor
            </NavLink>

            <NavLink to='/randomizer/legion'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Legion
            </NavLink>

            <NavLink to='/randomizer/bfa'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Battle for Azeroth
            </NavLink>

            <NavLink to='/randomizer/shadowlands'
                className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                Shadowlands
            </NavLink>
        </nav>
    )
}

export default Leftbar