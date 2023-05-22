import { ReactNode } from 'react'


/** @interface ButtonProps */
export interface ButtonProps {
    text: ReactNode, /** @property {string} text - Texto que será exibido no Button */
    icon?: string, /** @property {string} icon - Nome do ícone (usar: https://fonts.google.com/icons)*/
    iconClass?: string, /** @property {string} iconClass - Classe do ícone (user: https://fonts.google.com/icons)*/
    onClick?: CallableFunction, /** @property {CallableFunction} onClick - Função que deverá ser ativada em um evento onClick pelo Button */
    children?: React.ReactNode /** @property {React.ReactNode} children - Elemento React que será exibido antes do texto no Button */
}

export interface idiomaDataType {
    idioma: string,
    imgPath: string,
    imgAlt: string
}

export interface IdiomaSubmenuType {
    data: idiomaDataType[],
    func: (dt: idiomaDataType) => void,
    selected: string,
}
