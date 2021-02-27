import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import ReorderIcon from '@material-ui/icons/Reorder';
import i18n from './i18n'
import { withTranslation } from 'react-i18next';
const changeLang =(lann) => {
    return () => {
    i18n.changeLanguage(lann)
    }
}
function Navbar({t}) {
    const [active, setactive] = useState(false);
    const closeMenu = () => setactive(false)
    return (
        <div className='all'>
            <div className={t('Home')==='Home'? 'navbar' : 'navbar2'}>
                <div className={t('Home')==='Home'? 'leftside' : 'leftside2'}>
                    <div className={t('Home')==='Home'? 'links' : 'links2'} id={active ? "hidden" : ""}>
                        <Link to='/home' onClick={closeMenu}>{t('Home')}</Link>
                        <Link to='/products' onClick={closeMenu}>{t('Products')}</Link>
                        <Link to='/services' onClick={closeMenu}>{t('Services')}</Link>
                        <Link to='/lists' onClick={closeMenu}>{t('Lists')}</Link>
                    </div>
                    <button onClick={() => setactive(!active)}><ReorderIcon/></button>
                </div>
                <div className={t('Home')==='Home'? 'rightside' : 'rightside2'}>
                    <div className='signinsignup'>
                        <Link to='/signin'>{t('Sign In')}</Link>
                        <p>|</p>
                        <Link to='/signup'>{t('Sign Up')}</Link>
                    </div>
                </div>
            </div>
            <div className='konj'>
                <button onClick={changeLang('en')}>en</button>
                <button onClick={changeLang('fa')}>fa</button>
            </div>
        </div>
    )
}

export default withTranslation()(Navbar)
