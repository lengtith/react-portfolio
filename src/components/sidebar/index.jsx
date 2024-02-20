import { Link, NavLink } from 'react-router-dom';
import './index.scss';

import logo from './../../assets/images/logo-s.png';
import logoSub from './../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link to={`/`} className='logo'>
                <img src={logo} alt="logo" />
                <img className='sub-logo' src={logoSub} alt="logo subtitle" />
            </Link>

            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/about" className='about-link'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact" className='contact-link'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a href="#" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} color='$d4d4e'
                        className='anchor-icon'/>
                    </a>
                </li>
                <li>
                    <a href="#" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faGithub} color='$d4d4e'
                        className='anchor-icon'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar