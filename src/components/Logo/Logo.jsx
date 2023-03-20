import logo from '../../assets/img/logo.png'
import s from './Logo.module.css';

const Logo = () => {
    return (
        <img src={logo} alt="logo" className={s.logo}/>
    )
}

export default Logo;