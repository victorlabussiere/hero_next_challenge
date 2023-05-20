import { PriButtonWrapper, SecButtonWrapper, TerButtonWrapper } from './buttonsStyles'
import { ButtonProps } from '../Types'

export const PrimaryButton = function ({ text, icon, iconText }: ButtonProps): JSX.Element {

    return (
        <PriButtonWrapper role="button">
            <p>{text}</p>
            {icon ? <i className={icon}> {iconText} </i> : ''}
        </PriButtonWrapper >
    )
}

export const SecundaryButton = function ({ text, icon, iconText }: ButtonProps): JSX.Element {

    return (
        <SecButtonWrapper role="button" className="primaryButton">
            <p>{text}</p>
            {icon ? <i className={icon}> {iconText} </i> : ''}
        </SecButtonWrapper >
    )
}

export const TertiaryButton = function ({ text, icon, iconText }: ButtonProps): JSX.Element {

    return (
        <TerButtonWrapper role="button" className="primaryButton">
            <p>{text}</p>
            {icon ? <i className={icon}> {iconText} </i> : ''}
        </TerButtonWrapper >
    )
}