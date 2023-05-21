import PropTypes from 'prop-types'
import Navbar from './Navbar/Navbar'
import GlobalStyle from '../../pages/styles/globals'
import { arrSelectProps } from './Types'

interface LayoutProps {
    children: React.ReactNode
}

const ArrIdiomas: arrSelectProps = [
    { idioma: 'PT', imgAlt: 'BRASIL', imgPath: 'brFlag' },
    { idioma: 'EN', imgAlt: 'EUA', imgPath: 'usaFlag' },
    { idioma: 'ES', imgAlt: 'SPAIN', imgPath: 'spainFlag' }
]

const Layout: React.FC<LayoutProps> = function ({ children }) {
    return (
        <>
            <GlobalStyle />
            <Navbar idiomaData={ArrIdiomas} />
            {children}
        </>
    )
}

Layout.propTypes = { children: PropTypes.node.isRequired }

export default Layout