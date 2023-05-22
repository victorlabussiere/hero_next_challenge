import styled from "styled-components";

export const Cardlist_wrapper = styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;    
    gap: 4rem;
    min-height: 100%;
    
    @media (max-width: 1220px) {
        flex-direction: column;
        gap: 0
    }
    `

export const Card_container = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.5rem;

    width: 100%;
    min-height: 200px;
    
    transition: all .2s ease-in-out;    
    &:hover {
        cursor: pointer;
        transform: translateY(-8px);
        border-bottom: 4px solid #5F41D990;
    }
    
    @media (max-width: 1220px) {
        width: 100%;
        &:hover {
            cursor: pointer;
            transform: translateY(-8px);
            border-bottom: none
        }
    }

    .cardContent {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: .8rem;
        
        color: #000;
        min-height: max-content;
                
        h4 {
            font-weight: 600;
        }
        p {
            font-weight: 400;
            color: #000;
        }
    }
`