import { idiomaDataType, NavbarTexts } from "../../ui/Navbar/types/navbar.types"
import { Dispatch } from "react"
import { SetStateAction } from "react"
import { createContext } from "react"

type LayoutContextTypes = {
    subMenu?: idiomaDataType[]
    idioma?: NavbarTexts,
    selectIdioma: string,
    setSelectIdioma?: Dispatch<SetStateAction<string>>
}

export const LayoutContext = createContext<LayoutContextTypes>({ selectIdioma: 'PT' })