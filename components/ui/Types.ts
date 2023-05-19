import { ReactNode } from 'react'

export interface ButtonProps {
    text: ReactNode,
    icon?: string,
    iconText?: string,
    onClick?: CallableFunction

}

export interface selectPropsObj {
    idioma: string,
    imgPath: string,
    imgAlt: string
}

export type arrSelectProps = selectPropsObj[]