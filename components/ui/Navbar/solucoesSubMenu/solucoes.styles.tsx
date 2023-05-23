import styled from "styled-components";
import { animationVertical, animationHorizontal, modalShadow } from "../../../../styles/globals";

export const Modal__wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    opacity: 1;
    min-width: 800px;
    max-width: 1200px;
    max-height: min-content;

    z-index: 10;
    gap: 2.5rem;
    border-radius: 8px;

    background-color: #fff;
    padding: 3rem 2.75rem;
    color: #5F41D9;
    font-weight: 600;

    ${modalShadow}
    animation: ${animationVertical(1, -24)} ease-in-out .3s;
    top: 200%;
    left: 0;

    @media(max-width: 1220px) {
        position: absolute;
        top: 20%;
        
        flex-direction: column;
        justify-content: flex-start;
        
        height: fit-content;
        min-width: unset;
        width: 100%;
        padding: 1rem;

        animation: ${animationVertical(1, -40)} ease-in-out .3s;
    }

    @media (max-width: 720px) {
        position: absolute;
        top: 120%;

        gap: 1rem;
        height: 60vh;
        overflow-y: scroll ;
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
        justify-content: flex-start;
    }

    /* @media (max-width: 720px) {
        position: absolute;
    } */
`

export const Modal__card = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    gap: 1rem;    
    padding: 1rem;
    
    animation: ${animationHorizontal(1, -16)} ease-in-out .6s;
    transition: all .3s ease-in-out;
    border: 1px transparent solid;
    
    .cardContent {
        width: max-content;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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