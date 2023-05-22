import PropTypes from 'prop-types'
import GlobalStyle from '../../styles/globals'
import Navbar from './Navbar/Navbar'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MOCK_NAVBAR_TEXTS } from '../../utils/mock_helpers'

interface LayoutProps {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = function ({ children }) {
    const route = useRouter()
    const { asPath } = route

    const [subMenu, setSubMenu] = useState()
    const [navTexts, setNavTexts] = useState()

    useEffect(() => {
        fetch('/api/mockdb')
            .then(res => res.json())
            .then(data => {
                if (asPath === '/PT') return data.PT
                if (asPath === '/EN') return data.EN
                if (asPath === '/ES') return data.ES
            })
            .then(result => {
                setNavTexts(result)
                setSubMenu(result.submenu)
            })
            .catch(err => console.error('error', err))
    }, [asPath])

    return (
        <>
            <GlobalStyle />
            <Navbar idiomaData={subMenu || MOCK_NAVBAR_TEXTS.PT.submenu} texts={navTexts || MOCK_NAVBAR_TEXTS.PT} thisPath={asPath.slice(1)} />
            {children}
        </>
    )
}
Layout.propTypes = { children: PropTypes.node.isRequired }

export default Layout