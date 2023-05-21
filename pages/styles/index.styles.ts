import styled from "styled-components";

import { fontStyle } from "../../components/ui/Utils.style";

export const SectionWrapper = styled.section`
    background-color:#fff;
    ${fontStyle}
    display: flex;
    flex-direction: column;
    gap: 4.25rem;
    width: 100%;
    padding: 5rem;
    @media (max-width: 1220px) {
        padding: 5rem 1.5rem;
        /* gap: 1rem; */
    }
`

export const SectionContainer = styled.div`
padding: 0;
width: 100%;
display: flex;
flex-direction: column;
gap: 4.25rem;

    header {
            display: flex;
            flex-direction: column;
            gap: 19px;
            color: #000;
            width: 100%;
            
            hgroup {
                width: 100%;
                color: #432E98;

                display: flex;
                align-items: center;
                gap: 1rem;
                hr {
                    background-color: #432e98;
                    height: 2px;
                    width: 2.5rem;
                    border: none;
                    padding: 0;                
                }

                & :last-child {
                    color: #000;
                    margin-left: auto;

                    @media (max-width: 1220px) {
                        display: none;
                        visibility: hidden;
                    }

                }

            }
            
            h2 {
                font-weight: 500;
                @media (max-width: 1220px) {
                    line-height: 140%;
                    text-align: center;
                }
            }
        
        }
    @media (max-width: 1220px) {
        gap: 1.5rem;
    }

`

export const SectionFooterWrapper = styled.div`
    border-top: 1px solid #E7E7E9;
    display: flex;
    align-items: center;
    padding-top: 2rem;  

    div {
            display: flex;
            align-items: center;
            gap: 2rem;
        p {
            color: #000;
        }   
    }
    
    div:last-child {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-left: auto;
        cursor: pointer;
        transition: all.2s ease-in-out;

        p {
            color: #432E98;
        }

        &:hover {
            transform: translateX(8px);
        }
    }

    @media (max-width: 1220px) {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;

        div:last-child {
            margin: 0;
        }
    }
        
`