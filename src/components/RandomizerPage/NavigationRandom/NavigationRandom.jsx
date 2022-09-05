import React, { useState } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";

import style from "./NavigationRandom.module.scss";
import cl from "../../../assets/svg/classic-nav-new.png";
import bc from "../../../assets/svg/bc-nav.svg";
import wotlk from "../../../assets/svg/wotlk-nav-new2.png"
import cata from "../../../assets/svg/cata-nav.svg";
import pand from "../../../assets/svg/pand-nav.svg";
import dren from "../../../assets/svg/dren-nav.svg";
import leg from "../../../assets/svg/leg-nav.svg";
import bfa from "../../../assets/svg/bfa-nav.svg";
import sl from "../../../assets/svg/sl-nav-new.png";
import logo from "../../../assets/svg/logoHead.svg";
import { THEME_DARK, THEME_LIGHT, useTheme } from "../../../context/ThemeContext";
import { 
    Classic, 
    Bc, 
    Wotlk, 
    Cata,
    Pand,
    Draenor,
    Legion,
    Bfa,
    Sl,
} from "../../../toolkitRedux/reducers/addonReducer";
import { useEffect } from "react";
import { downRandom } from "../../../toolkitRedux";

const NavigationRandom = () => {
    const [addon, setAddon] = useState('Classic');

    const addonState = useSelector(state => state.addonReducer.addon)

    const dispatch = useDispatch();

    const changeAddon = (disp) => {
        dispatch(disp())
        // dispatch(downRandom())
    }

    
    useEffect(() => {
        setAddon(addonState);
    },[addonState])

    const ThemeButton = ({
        theme,
        text
    }) => {
        const isTheme = useTheme();

        return (
            <>
                <button onClick={() => isTheme.change(theme)}>{text}</button>
            </>
        )
    }

    return (
        <>
            <span className={style.logo}>
                <img src={logo} alt='#' />
                {/* <>
                    <ThemeButton theme={THEME_LIGHT} text='Light' onClick={ThemeButton} />
                    <ThemeButton theme={THEME_DARK} text='Dark' onClick={ThemeButton} />
                </> */}
            </span>
            <nav className={style.nav}>
                <img
                    src={cl}
                    alt="#"
                    onClick={() => changeAddon(Classic)}
                    className={cn(addon === 'Classic' ? style.item + ' ' + style.active : style.item)}
                />
                <img
                    src={bc}
                    alt="#"
                    onClick={() => changeAddon(Bc)}
                    className={cn(addon === 'Bc' ? style.item + ' ' + style.active : style.item)}
                />
                <img
                    src={wotlk}
                    alt="#"
                    onClick={() => changeAddon(Wotlk)}
                    className={cn(addon === 'Lich' ? style.item + ' ' + style.active : style.item)}
                />
                <img
                    src={cata}
                    alt="#"
                    onClick={() => changeAddon(Cata)}
                    className={cn(addon === 'Cata' ? style.item + ' ' + style.active : style.item)}
                />                <img
                    src={pand}
                    alt="#"
                    onClick={() => changeAddon(Pand)}
                    className={cn(addon === 'Pand' ? style.item + ' ' + style.active : style.item)}
                />
                <img
                    src={dren}
                    alt="#"
                    onClick={() => changeAddon(Draenor)}
                    className={cn(addon === 'Draenor' ? style.item + ' ' + style.active : style.item)}
                />                <img
                    src={leg}
                    alt="#"
                    onClick={() => changeAddon(Legion)}
                    className={cn(addon === 'Legion' ? style.item + ' ' + style.active : style.item)}
                />
                <img
                    src={bfa}
                    alt="#"
                    onClick={() => changeAddon(Bfa)}
                    className={cn(addon === 'Bfa' ? style.item + ' ' + style.active : style.item)}
                />    <img
                    src={sl}
                    alt="#"
                    onClick={() => changeAddon(Sl)}
                    className={cn(addon === 'Sl' ? style.item + ' ' + style.active : style.item)}
                />
            </nav>
        </>
    )
}

export default NavigationRandom