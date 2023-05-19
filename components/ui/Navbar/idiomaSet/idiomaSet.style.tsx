import styled from "styled-components";
import { animationVertical, fontStyle } from '../../Utils.style'

export const IdiomaWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: .5rem;
    
    position: relative;
`

export const IdiomaUlWrapper = styled.ul`
        ${fontStyle}
    
        position: absolute;
        right: 0;
        top: 200%;
        width: 138px;

        background-color: #fff;
        color: #5F41D9;
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