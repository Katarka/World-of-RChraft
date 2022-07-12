import React from "react";
import cn from "classnames";
import {NavLink} from "react-router-dom";
import style from "./Leftbar.module.scss";
import cl from "../../assets/svg/classic-nav.svg";
import bc from "../../assets/svg/bc-nav.svg";
import cata from "../../assets/svg/cata-nav.svg";
import pand from "../../assets/svg/pand-nav.svg";
import dren from "../../assets/svg/dren-nav.svg";
import leg from "../../assets/svg/leg-nav.svg";
import bfa from "../../assets/svg/bfa-nav.svg";
import sl from "../../assets/svg/sl-nav.svg";
import logo from "../../assets/svg/logoHead.svg";

const Leftbar = () => {
    return (
        <>
        <span className={style.logo}>
            <img src={logo}/>
        </span>
            <nav className={style.nav}>
                <NavLink to='/randomizer/classic' className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                    <img src={cl}/>
                </NavLink>

                <NavLink to='/randomizer/bc'
                         className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                    <img src={bc}/>
                </NavLink>

                <NavLink to='/randomizer/wotlk'
                         className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                    <img src={cl}/>
                </NavLink>

                <NavLink to='/randomizer/cataclysm'
                         className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                    <img src={cata}/>
                </NavLink>

                <NavLink to='/randomizer/pand'
                         className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                    <img src={pand}/>
                </NavLink>

                <NavLink to='/randomizer/drenour'
                         className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                    <img src={dren}/>
                </NavLink>

                <NavLink to='/randomizer/legion'
                         className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                    <img src={leg}/>
                </NavLink>

                <NavLink to='/randomizer/bfa'
                         className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                    <img src={bfa}/>
                </NavLink>

                <NavLink to='/randomizer/shadowlands'
                         className={({isActive}) => (!isActive ? style.item : cn(style.item + ' ' + style.active))}>
                    <img src={sl}/>
                </NavLink>
            </nav>
        </>
    )
}

export default Leftbar