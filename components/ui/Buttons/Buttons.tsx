import { PrimaryButtonStyle, SecundaryButtonStyle, TertiaryButtonStyle } from './buttonsStyles'
import { ButtonProps } from '../Types'

export const PrimaryButton = function ({ text, icon, iconText }: ButtonProps): JSX.Element {

    return (
        <PrimaryButtonStyle role="button">
            <p>{text}</p>
            {icon ? <i className={icon}> {iconText} </i> : ''}
        </PrimaryButtonStyle >
    )
}

export const SecundaryButton = function ({ text, icon, iconText }: ButtonProps): JSX.Element {

    return (
        <SecundaryButtonStyle role="button" className="primaryButton">
            <p>{text}</p>
            {icon ? <i className={icon}> {iconText} </i> : ''}
        </SecundaryButtonStyle >
    )
}

export const TertiaryButton = function ({ text, icon, iconText }: ButtonProps): JSX.Element {

    return (
        <TertiaryButtonStyle role="button" className="primaryButton">
            <p>{text}</p>
            {icon ? <i className={icon}> {iconText} </i> : ''}
        </TertiaryButtonStyle >
    )
}