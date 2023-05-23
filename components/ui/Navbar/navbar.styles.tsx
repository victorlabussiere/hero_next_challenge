import styled from 'styled-components'
import { animationHorizontal, Inner_fontStyle, hoverSettings, responsiveHiddenDisplay } from '../../../styles/globals'

export const Navbar__wrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;

    width: 100vw;
    height: 88px;
    padding: .5rem 8vw;

    background: rgba(0, 0, 0, 0.03);
    backdrop-filter: blur(15px);

    .logo-ensinio {       
        cursor: pointer;
        animation: ${animationHorizontal(1, -16)} + .3s ease-in-out;
    }

    .verticalRow {
        min-width: 1px;
        min-height: 40%;
        background-color: #fff;
        opacity: calc(.9);

        @media (max-width: 1220px) {
            ${responsiveHiddenDisplay}
        }
    }

    .burgerMenu {
        color: #fff;
        display: flex;
        vertical-align: middle;
        align-items: center;
        height: 100%;
        visibility: visible;
        font-size: 1.5rem;

        ${hoverSettings}
        animation: ${animationHorizontal(.6, 16)} ease-in-out .3s;

        @media (min-width: 1220px) {
            ${responsiveHiddenDisplay}
        }
    }

    // Responsive sizes:
    @media(max-width: 1220px) {
        justify-content: space-between;
        
        &.responsiveNav{
            display: flex;    
            visibility: visible;
            padding: .5rem 2rem;
            justify-content: space-between;
            z-index: 5;
        }
    }
    
`
export const Linklist_wrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${Inner_fontStyle}
    gap: 2vw;
    color: #fff;

    .stateManager {
        display: flex;
        align-items: center;
    }

    .main_solucoes {
        position: relative;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: .5rem;            
        list-style: none;
        ${hoverSettings} 
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

    @media(max-width: 1220px) {
        ${responsiveHiddenDisplay}
    }


`
export const Navbar_buttons__wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 2vw;

    @media (max-width: 1220px) {
        ${responsiveHiddenDisplay}
    }

`
export const Menu_responsivo__wrapper = styled.div`
    background-color: #5f41d9;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    opacity: 1;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: .2rem 2rem;
    gap: 2rem;

    animation: ${animationHorizontal(1, -40)} ease-in-out .3s;

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
            z-index: 9;
            
        }
        
        & .respVerticalRow {
            min-width: 1px;
            height: 40%;
            background-color: #99f3f5;               
        }

        .iconClose {
            z-index: 6;           
        }
    }

    .solucoesResponsiveItem {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        z-index: 1;
        position: relative;
    }

    .responsiveListItems {
        position: static;
        display: flex;
        flex-direction: column;
        width: 100%;

        list-style: none;   
        ${Inner_fontStyle}
        
        li {
            width: 100%;
            display: flex;
            padding: 1.6rem 0;
            animation: ${animationHorizontal(1, -16)} .6s ease-in-out;
            align-items: center;            
            ${hoverSettings}    
            border-left: 2px solid transparent;
            
            &:hover {
                padding-left: 1rem;
                border-left: 2px solid #5f41d980;
            }

            .stateManager {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                z-index: 7;                
            
            i {
                color: #99f3f5;
            }

            p {
                ${Inner_fontStyle}
            }

        }
        }        
    }
    
    // hide display
    &.hidden {
        display: none;
        visibility: hidden;
    }

    @media (min-width: 1220px) {
        ${responsiveHiddenDisplay}

        nav {
            position: relative;
        }
    }

    @media (max-width: 720px) {
        padding: .5rem 1.5rem;
        header {
            gap: .5rem;
        }
    }
`