import { useEffect, useState } from 'react'

import Navbar from '../ui/Navbar/Navbar'
import { LayoutContext } from './context/LayoutContext'

import GlobalStyle from '../../styles/globals'
import { NavbarTexts, idiomaDataType } from '../ui/Navbar/types/navbar.types'

const Layout = function ({ children }: { children: React.ReactNode }) {

    const [subMenu, setSubMenu] = useState<idiomaDataType[]>()
    const [idioma, setIdioma] = useState<NavbarTexts>()
    const [selectIdioma, setSelectIdioma] = useState<string>('PT')

    useEffect(() => {
        fetch('/api/mockdb')
            .then(res => res.json())
            .then(data => {
                setSubMenu(data[selectIdioma].submenu)
                return setIdioma(data[selectIdioma])
            })
            .catch(err => console.error('error', err))
    }, [selectIdioma])

    return (
        <LayoutContext.Provider
            value={{
                subMenu,
                setSelectIdioma,
                selectIdioma,
                idioma
            }}
        >
            <GlobalStyle />
            <Navbar />
            {children}
        </LayoutContext.Provider >
    )

}
export default Layout