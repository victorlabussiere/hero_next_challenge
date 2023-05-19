import styled from "styled-components";
import { animationVertical, animationHorizontal } from "../../Utils.style";

export const ModalHeaderWrapper = styled.hgroup`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`


export const ModalWrapper = styled.div`
    &.hidden {
        display: none;
        visibility: hidden;
    }

    position: absolute;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    opacity: 1;
    z-index: 9;
    min-width: 800px;
    max-width: 1200px;
    max-height: min-content;

    top: 160%;
    left: 0;
    gap: 2.5rem;
    border-radius: 8px;

    background-color: #fff;
    padding: 3rem 2.75rem;
    color: #5F41D9;
    font-weight: 600;

    .modalContent {
        display: flex;
        align-content: space-evenly ;
        align-items: center;
        gap: 1rem;
        justify-content: space-around;
        flex-wrap: wrap;
        flex: 1 1 100%;

        color: #000;
        z-index: 9;
        
        .card {

            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 1rem;
            
            padding: 1rem;
            border-radius: 9px;
            border: 1px transparent solid;
            flex: 0 2 45%;

            animation: ${animationHorizontal(1, -16)} ease-in-out .6s;
            transition: all .3s ease-in-out;
            &:hover{
                border: 1px solid #5F41D9;
            }
            
            .cardContent {
                width: max-content;
                display: flex;
                flex-direction: column;
                animation: ${animationHorizontal(1, 24)} .6s ease-in-out;
                color: #000;
                
                h4 {
                    font-weight: 600;
                }
    
                p {
                    font-weight: 400;
                }
            }
        }
    }


    @media(max-width: 1220px) {
        position: absolute;
        top: 90%;
        
        flex-direction: column;
        justify-content: space-evenly;
        
        height: fit-content;
        min-width: unset;
        padding: 1rem;

        animation: ${animationVertical(1, -40)} ease-in-out .3s;
        max-width: 400px;
        
        .modalContent{
            color: #000;
            min-width: fit-content;
            flex-direction: column;
            align-items: flex-start;
            gap: .5rem;
                        
            .card {
                padding: 1rem;
                border: none;
                justify-content: flex-start;
                flex: unset;
                flex-basis: unset;
                align-items: flex-start;
                &:hover {
                    border: unset;
                }
            }
        }
    
    }
`