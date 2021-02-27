import React,{useEffect} from 'react'
import { withTranslation } from 'react-i18next';
function Home ({t}) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <h1 className="home">{t('Home')}</h1>
        </>
    )
}

export default withTranslation()(Home)
