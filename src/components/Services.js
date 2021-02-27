import React,{useEffect} from 'react'
import { withTranslation } from 'react-i18next';
function Services ({t}) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return  <h2 className="services">{t('Services')}</h2>
}
export default withTranslation()(Services)
