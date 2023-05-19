import PropTypes from 'prop-types'
import Navbar from './Navbar/Navbar'
import GlobalStyle from '../../pages/styles/globals'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = function ({ children }) {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            {children}
        </>
    )
}

Layout.propTypes = { children: PropTypes.node.isRequired }

export default Layout