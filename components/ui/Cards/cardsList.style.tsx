import styled from "styled-components";
import { fontStyle } from "../Utils.style"

export const CardContainerWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;    

    @media (max-width: 1220px) {
        flex-direction: column;
    }
`

export const CardWrapper = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;

    width: 304px;
    height: 173px;

    ${fontStyle}
        
    transition: all .2s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: translateY(-8px);
        border-bottom: 2px solid#5F41D9;
    }

    @media (max-width: 1220px) {
        width: 100%;
    }



    .cardContent {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: .8rem;

        color: #000;

        
        h4 {
            font-weight: 600;
        }
        p {
            font-weight: 400;
            color: #000;
        }
    }
`