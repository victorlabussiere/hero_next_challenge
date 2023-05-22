import { createGlobalStyle } from 'styled-components'
import { keyframes } from 'styled-components'

export const Inner_fontStyle = `
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 105%;
    color: #fff;    
`
export const hoverSettings = `
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
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(-259.95deg, #5F41D9 2.25%, #41B5D9 100.27%);
        width: 100%;
        height: 100%;
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;            
    }

    .hidden {
        display: none;
        visibility: hidden;
    }

    h1{
        width: 499px;
        height: 96px;
        ${Inner_fontStyle}
        font-size: 44px;
        font-weight: 700;

        @media (max-width: 720px) {
            font-size: 32px;
            font-weight: 600;

            height: unset;
            width: unset;
        }

        @media (max-width: 320px) {
            font-size: 22px;
        }
    }

    h2 {
        ${Inner_fontStyle}
        color: #000;
        font-size: 32px;
        font-weight: 400;
        width: 100%;

        @media (max-width: 1220px) {
            font-size: 24px;            
        }
        @media (max-width: 320px) {
           font-size: 18px ;
           font-weight: 300;
        }
    }

    h4{
        ${Inner_fontStyle}
        color: #000;
        font-weight: 600;
        
        @media (max-width: 320px) {
            font-size: 14px;            
        }
    }
    p {
        
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%; 

        @media (max-width: 320px) {
            font-size: 12px;
        }
    }

`