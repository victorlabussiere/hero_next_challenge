import styled from 'styled-components'
import { Inner_fontStyle, hoverSettings, animationHorizontal } from '../../../styles/globals'

const buttonDisplay = `
    display: flex;
    align-items: center;
    vertical-align: middle;    
    gap: .5rem;    
`

const Button = styled.div`
    ${Inner_fontStyle}
    ${buttonDisplay}    
    transition: all .2s ease-in-out;
    ${hoverSettings}
    animation: ${animationHorizontal(.6, 16)} ease-in-out .6s;    
`

export const Button__primary = styled(Button)`
    background-color: #00e1e7;
    color: #130c25;
    
    border-radius: 80px;
    padding: 1rem 3rem;
    width: fit-content;    
    p {font-weight: 700;}
`
export const Button__secundary = styled(Button)`
    border-radius: 80px;
    padding: 1rem 3rem;
    border: 1px solid #fff;
    width: fit-content;

    p {font-weight: 500}
`
export const Button__tertiary = styled(Button)`
    color: #fff;
    transition: .2s all ease-in-out;   
    p {
        font-weight: 300;        
    }
    
    i {
        color: #99f3f5;
    }    
`