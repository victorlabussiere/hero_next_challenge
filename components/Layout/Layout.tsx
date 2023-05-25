import { Dispatch } from 'react'
import { useEffect, useState, createContext, SetStateAction } from 'react'
import PropTypes from 'prop-types'

import Navbar from '../ui/Navbar/Navbar'
import { NavbarTexts, idiomaDataType } from '../../types'

import GlobalStyle from '../../styles/globals'

type LayoutContextTypes = {
    subMenu?: idiomaDataType[]
    idioma?: NavbarTexts,
    selectIdioma: string,
    setSelectIdioma?: Dispatch<SetStateAction<string>>
}

export const LayoutContext = createContext<LayoutContextTypes>({ selectIdioma: 'PT' })

interface LayoutProps { children: React.ReactNode }
const Layout: React.FC<LayoutProps> = function ({ children }) {

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
Layout.propTypes = { children: PropTypes.node.isRequired }

export default Layout