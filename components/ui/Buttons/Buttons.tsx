import { Button__primary, Button__secundary, Button__tertiary } from './buttonsStyles'
import { ButtonProps } from '../types'
import React from 'react'

export const PrimaryButton = function ({ text, icon, iconClass, children }: ButtonProps): JSX.Element {

    return (
        <Button__primary role="button">
            {children ? children : ''}
            <p>{text}</p>
            {icon ? <i className={icon}> {iconClass} </i> : ''}
        </Button__primary >
    )
}

export const SecundaryButton = function ({ text, icon, iconClass, children }: ButtonProps): JSX.Element {

    return (
        <Button__secundary role="button">
            {children ? children : ''}
            <p>{text}</p>
            {icon ? <i className={icon}> {iconClass} </i> : ''}
        </Button__secundary >
    )
}

export const TertiaryButton = function ({ text, icon, iconClass, children }: ButtonProps): JSX.Element {

    return (
        <Button__tertiary role="button">
            {children ? children : ''}
            <p>{text}</p>
            {icon ? <i className={icon}> {iconClass} </i> : ''}
        </Button__tertiary >
    )
}