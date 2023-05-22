import PropTypes from 'prop-types'
import GlobalStyle from '../../styles/globals'

interface LayoutProps {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = function ({ children }) {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    )
}

Layout.propTypes = { children: PropTypes.node.isRequired }

export default Layout