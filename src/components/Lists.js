import React,{useEffect} from 'react'
import { withTranslation } from 'react-i18next';
function Lists ({t}) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return  <h2 className="lists">{t('Lists')}</h2>
}
export default withTranslation()(Lists)