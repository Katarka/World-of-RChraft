import style from "./stylesRandomize.module.css";
import AllianceLogo from "../assets/img/ALogo.png";
import HordeLogo from "../assets/img/HLogo.png";

const imageAlliance = <img className={style.imgLogo} src={AllianceLogo}/>
const imageHorde = <img className={style.imgLogo} src={HordeLogo}/>

export const changeLogo = ([data]) => [
    data[0] === 'Alliance' ? imageAlliance : '',
    data[0] === 'Horde' ? imageHorde : '',
]

