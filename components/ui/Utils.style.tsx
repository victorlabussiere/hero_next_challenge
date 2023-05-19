import { keyframes } from "styled-components"

export const fontStyle = `
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 105%;
    color: #fff;
    opacity: calc(.9);
`
export const buttonDisplay = `
    display: flex;
    align-items: center;
    vertical-align: middle;    
    background-color:unset;
    gap: .5rem;    
`
export const navElementsHover = `
    &:hover {
            cursor: pointer;
            opacity: 1;
            transform: translateY(2px);
            opacity: 1;
            transition: .2s all ease-in-out;
        }
`
export const responsiveHiddenDisplay = `
    display: none;
    visibility: hidden;
    position: absolute ;
    top: -50;
`
export const animationHorizontal = (opacity: number, direction: number) =>
    keyframes`
    from {
        opacity: 0;
        transform: translateX(${direction}px);
    }
    to {
        opacity: ${opacity};
    }
`
export const animationVertical = (opacity: number, direction: number) =>
    keyframes`
        from {
            opacity: 0;
            transform: translateY(${direction}px);
        }
        to {
            opacity: ${opacity};
        }
    `
