import React from 'react'
import validate from '../validation/ValidatFunction'
import { useTranslation } from 'react-i18next';
function Footer() {
    const { t } = useTranslation();
    const handleValidate = (e) => {
        const err = validate('email', e.target.value)
        document.getElementById('err').innerHTML = err
        if(!err) {
            document.getElementById('input').style.border = '2px solid green'
        } else {
            document.getElementById('input').style.border = '2px solid red'
        }
    }
    return (
        <div className='footer'>
            <h3>{t('1')}</h3>
            <p>{t('2')}</p>
            <p>{t('3')} 09196107737</p>
            <div>
            <span>{t('4')}</span>
            <input type="email" placeholder='alireza691111@gmail.com' id='input' onChange={handleValidate}/>
            </div>
            <p id="err"></p>
            <div className='logos'>
            <a href="/">
                <i class="fab fa-twitter-square"></i>
            </a>
            <a href="/">
                <i class="fab fa-facebook-square"></i>
            </a>
            <a href="/">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="/">
                <i class="fab fa-youtube-square"></i>
            </a>
            </div>
            <hr class="footer-hr" />
            <p>{t('5')}</p>
        </div>
    )
}

export default Footer
