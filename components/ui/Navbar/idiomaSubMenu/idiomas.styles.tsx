import styled from "styled-components";
import { animationVertical } from "../../../../styles/globals";

export const Idioma_submenu__wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: .5rem;
    position: relative;
    
    .stateManager {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .idiomasContainer {
        top: 200%;
        left: 0;
        position: absolute;
    }
`

export const Idioma_list__wrapper = styled.ul`        
    width: 138px;
    color: #5F41D9;
    background-color: #fff;
    border-radius: .5rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    z-index: 9;
    animation: ${animationVertical(1, -8)} .3s ease-in-out;
    
    .selectedItem {
        background: linear-gradient(90deg, #5F41D9 -880.48%, rgba(95, 65, 217, 0) 100%);
    }

    &.hideOptions {
        display: none;
        visibility: hidden;
    }
        
    li {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        height: fit-content;
        align-items: center;
        justify-content: flex-start;
        width: 100%;        
            
        i {
            justify-self: end;
        }

        &:first-child {
            border-radius: 8px 8px 0 0;            
        }
        &:last-child {
            border-radius: 0 0 8px 8px;
        }
        &:hover {
            cursor: pointer;
            background-color: #e9e9e9;
        }

        .check {
            color: #5F41D9;
            margin-left: auto;
        }
        .hideCheck {
            display: none;
            visibility: hidden;
        }
    }
   
`