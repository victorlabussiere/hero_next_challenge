import styled from "styled-components";
import { animationVertical, animationHorizontal } from "../../../../styles/globals";

export const Modal__wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    opacity: 1;
    min-width: 800px;
    max-width: 1200px;
    max-height: min-content;

    top: 160%;
    left: 0;
    z-index: 99;
    gap: 2.5rem;
    border-radius: 8px;

    background-color: #fff;
    padding: 3rem 2.75rem;
    color: #5F41D9;
    font-weight: 600;

    @media(max-width: 1220px) {
        position: absolute;
        top: 90%;
        z-index: 9;
        
        flex-direction: column;
        justify-content: space-evenly;
        
        height: fit-content;
        min-width: unset;
        width: 100%;
        padding: 1rem;

        animation: ${animationVertical(1, -40)} ease-in-out .3s;
    }
`

export const Modal__list = styled.ul`
    display: flex;
    align-content: space-evenly ;
    align-items: center;
    gap: 1rem;
    justify-content: space-around;
    flex-wrap: wrap;
    flex: 1 1 100%;
    color: #000;
    
    @media (max-width: 1220px) {
        color: #000;
        gap: .5rem;
    }
`

export const Modal__card = styled.li`
    display: flex;
    align-items: flex-start;
    align-content: start;
    justify-content: start;
    
    gap: 1rem;    
    padding: 1rem;
    
    animation: ${animationHorizontal(1, -16)} ease-in-out .6s;
    transition: all .3s ease-in-out;
    border: 1px transparent solid;
    
    .cardContent {
        width: max-content;
        display: flex;
        flex-direction: column;
        animation: ${animationHorizontal(1, 24)} .6s ease-in-out;
        color: #000;
    }

    @media (max-width: 1220px) {
        padding: 1rem;
        border: none;
        justify-content: flex-start;
        flex: unset;
        flex-basis: unset;
        align-items: flex-start;
        width: 40%;
        
        &:hover {
            border: unset;
        }
    }

    @media (max-width: 720px) {
        width: 100%;
        align-items: center;
    }
`