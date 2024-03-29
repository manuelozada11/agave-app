import './index.css'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { useContext } from 'react'
import logo from '/logo-white.png'
import AppContext from '../../contexts/app'
import { scrollToTop } from '../../common/utils'

const options = [
    {
        name: 'Fotos',
        to: 'fotos'
    },
    {
        name: 'Videos',
        to: 'videos'
    },
    {
        name: 'Webdev',
        to: 'webs'
    },
    {
        name: 'Nosotros',
        to: 'nosotros'
    },
    {
        name: 'Contacto',
        to: 'contacto'
    },
]

const Navbar = () => {
    const appContext = useContext(AppContext)
    return (
        <nav className="navbar shadow">
            <div className='navbar-mobile'>
                <div className='icon-menu' onClick={() => appContext.setIsOpenSidebar(true)}>
                    <AiOutlineMenu size={25} />
                </div>
                <ul className='d-flex flex-column'>
                    { options.map((nav, index) => <Link key={`${index}${name}`} onClick={() => scrollToTop(0)} to={nav.to}>{`${nav.name}`}</Link>) }
                </ul>
            </div>

            <Link to="/" onClick={() => scrollToTop(0)}><img src={logo} alt="agavemedia" width={200} /></Link>
            <ul className='d-flex flex-row justify-content-end'>
                { options.map((nav, index) => <Link key={`${index}${name}`} onClick={() => scrollToTop(0)} to={nav.to}>{`${nav.name}`}</Link>) }
            </ul>
        </nav>
    );
}
 
export default Navbar;