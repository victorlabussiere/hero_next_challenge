import styled from 'styled-components'
import { fontStyle, buttonDisplay, navElementsHover, animationHorizontal } from '../Utils.style'

export const PriButtonWrapper = styled.div`
    ${fontStyle}
    ${buttonDisplay}
     font-weight: 700;
    background-color: #00e1e7;
    color: #130c25;

    border-radius: 80px;
    padding: 1rem 3rem;
    width: fit-content;
    ${navElementsHover}
    animation: ${animationHorizontal(.6, 16)} ease-in-out .6s;    
`
export const SecButtonWrapper = styled.div`
    ${fontStyle}
    ${buttonDisplay}
    transition: all .2s ease-in-out;
    border-radius: 80px;
    padding: 1rem 3rem;
    border: 1px solid #fff;
    width: fit-content;

    ${navElementsHover}
    animation: ${animationHorizontal(.6, 16)} ease-in-out .6s;

`
export const TerButtonWrapper = styled.div`
    ${fontStyle}
    ${buttonDisplay}
    color: #fff;
    transition: .2s all ease-in-out;   
    
    i {
        color: #99f3f5;
    }
    
    ${navElementsHover}
    animation: ${animationHorizontal(.6, 16)} ease-in-out .6s;    
`