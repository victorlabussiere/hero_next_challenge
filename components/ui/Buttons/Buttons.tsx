import { Button__primary, Button__secundary, Button__tertiary } from './buttonsStyles'
import React from 'react'

interface ButtonProps {
    text: React.ReactNode, /** @property {string} text - Texto que será exibido no Button */
    icon?: string, /** @property {string} icon - Nome do ícone (usar: https://fonts.google.com/icons)*/
    iconClass?: string, /** @property {string} iconClass - Classe do ícone (user: https://fonts.google.com/icons)*/
    onClick?: CallableFunction, /** @property {CallableFunction} onClick - Função que deverá ser ativada em um evento onClick pelo Button */
    children?: React.ReactNode /** @property {React.ReactNode} children - Elemento React que será exibido antes do texto no Button */
}


export const PrimaryButton = function ({ text, icon, iconClass, children }: ButtonProps): JSX.Element {
    /** Button constituido por ícones opicionais, que podem ser imagens ou construindo uma tag <i> */
    return (
        <Button__primary role="button">
            {children ? children : ''}
            <p>{text}</p>
            {icon ? <i className={icon}> {iconClass} </i> : ''}
        </Button__primary >
    )
}

export const SecundaryButton = function ({ text, icon, iconClass, children }: ButtonProps): JSX.Element {
    /** Button constituido por ícones opicionais, que podem ser imagens ou construindo uma tag <i> */
    return (
        <Button__secundary role="button">
            {children ? children : ''}
            <p>{text}</p>
            {icon ? <i className={icon}> {iconClass} </i> : ''}
        </Button__secundary >
    )
}

export const TertiaryButton = function ({ text, icon, iconClass, children }: ButtonProps): JSX.Element {
    /** Button constituido por ícones opicionais, que podem ser imagens ou construindo uma tag <i> */
    return (
        <Button__tertiary role="button">
            {children ? children : ''}
            <p>{text}</p>
            {icon ? <i className={icon}> {iconClass} </i> : ''}
        </Button__tertiary >
    )
}