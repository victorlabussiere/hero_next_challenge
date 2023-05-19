import styled from 'styled-components'
import { animationHorizontal, animationVertical, fontStyle, navElementsHover, responsiveHiddenDisplay } from '../../ui/Utils.style'

export const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;

    width: 100vw;
    height: 88px;
    padding: .5rem 5rem;

    background: rgba(0, 0, 0, 0.03);
    backdrop-filter: blur(15px);

    .logo-ensinio {       
        cursor: pointer;
        animation: ${animationHorizontal(1, -16)} + 1s ease-in-out;
    }

    .verticalRow {
        min-width: 1px;
        min-height: 40%;
        background-color: #fff;
        opacity: calc(.9);
    }

    .burgerMenu {
        color: #fff;
        display: flex;
        vertical-align: middle;
        align-items: center;
        height: 100%;
        visibility: visible;
        font-size: 1.5rem;

        ${navElementsHover}
        animation: ${animationHorizontal(.6, 16)} ease-in-out 1s
    }

    &.responsiveNav {
        ${responsiveHiddenDisplay}
    }

    // Responsive sizes:
    @media(max-width: 1220px) {
        ${responsiveHiddenDisplay}
        
        &.responsiveNav{
            display: flex;    
            visibility: visible;
            padding: .5rem 2rem;
            justify-content: space-between;
            z-index: 5;
        }
    }
    
`
export const ListWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${fontStyle}
    gap: 2vw;
    color: #fff;
   
    li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: .5rem;            
        list-style: none;
        ${navElementsHover} 
        position: relative;

        animation: ${animationHorizontal(.9, -16)} ease-in-out 1s;
        hgroup {
            display: flex;
            align-items: center;
            width: fit-content;
            gap: 1rem;
        }

        a{
            text-decoration: none;
            color: #fff;
            font-style: none;
        }

        i {
            color: #99F3F5;            
        }

        transition: all .2s ease-in-out;
    }
`

export const ModalWrapper = styled.div`
            
    position: absolute;
    display: flex;
    flex-direction: column;

    top: 180%;
    left: 0;
    gap: 2.5rem;
    border-radius: 8px;
    min-width: 55vw;
    max-width: 80vw;


    background-color: #fff;
    padding: 3rem 2.75rem;
    color: #5F41D9;
    font-weight: 600;


    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        color: #000;
        width: 100%;
        h4 {
            font-weight: 600;
        }
        li {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-basis: 30%;
            padding: 1rem;
            border-radius: 9px;
            border: 1px transparent solid;

            animation: ${animationHorizontal(1, -16)} ease-in-out .6s;
            transition: all .6s ease-in-out;
            &:hover{
                border: 1px solid #5F41D9;
            }

            h4 {
                font-weight: 600;
            }

            p {
                font-weight: 400;
            }
                                            
            aside {
                width: max-content;
                display: flex;
                flex-direction: column;
                animation: ${animationHorizontal(1, 24)} .6s ease-in-out;
            }
        }
    }

    &.hidden{
        display: none;
        visibility: hidden;
        top: -200%
    }

`

export const ActionWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 2vw;
`
export const ResponsiveMenu = styled.div`
    background-color: #5f41d9;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
    opacity: 1;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: .2rem 2rem;
    gap: 2rem;

    animation: ${animationVertical(1, -40)} ease-in-out .6s;

    header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 80px;
        justify-content: space-between;
        
        gap: 2rem;
        
        nav {
            width: 100%;
            justify-content: space-between;
            display: flex;
            align-items:  center;

            div {
                display: flex;
                justify-content: flex-end;
                justify-items: flex-end;                
                ul {
                    width: 200px;
                    li {
                        padding: 1rem;
                    }
                }
            }        
        }
        
        span {
            min-width: 1px;
            height: 40%;
            background-color: #99f3f5;
            opacity: calc(.9);
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;   
        ${fontStyle}
        width: 100%;
        
        li {
            padding: 1.6rem 0;
            border-top: 1px solid rgba(153, 244, 245, 0.6);
            animation: ${animationHorizontal(1, -16)} .6s ease-in-out;

            ${navElementsHover}

        }
    }

    // hidden display
    &.hidden {
        display: none;
        visibility: hidden;
    }
`
