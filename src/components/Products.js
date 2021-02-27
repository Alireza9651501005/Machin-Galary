import React,{useEffect} from 'react'
import { withTranslation } from 'react-i18next';
function Products ({t}) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return  <h2 className="products" id='products'>{t('Products')}</h2>
}
export default withTranslation()(Products)
