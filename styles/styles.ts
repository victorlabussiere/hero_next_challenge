import styled from "styled-components";
import { Inner_fontStyle, responsiveHiddenDisplay } from "./globals";


export const Hero__wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    ${Inner_fontStyle}    
`

export const Hero__container = styled.aside`
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    margin-top: 15vh;   
    width: 100%;
    padding: 0 15vw;

    .hero__texts {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 50%;

        margin: 5% 0  auto 0;
        
        .hero__label {
            display: flex;
            align-items: center;
            max-width: 256px;
            gap: 1rem;
            
            p {
                color: #fff;
            }

            @media (max-width:320px) {
                ${responsiveHiddenDisplay}
            }
        }
        
        .hero__header {
            color: #FFFFFF;
            display: flex;
            flex-direction: column;
            gap: 2.7rem;
            
            @media (max-width: 720px) {
                gap: 3rem;
            }         
            
            p {
                width: 399px;                           
            }
        }
        
        .hero__CTAs {
            display: flex;
            gap: 2.75rem;
            padding-bottom: 3rem;

            @media (max-width: 1220px) {
                padding-bottom: 0;
            }

            @media (max-width: 720px) {
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                padding-bottom: 0;
            }

            @media (max-width: 320px) {
                padding-bottom: 3rem;
            }
        }
    }
    
    @media (max-width: 1220px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        margin-top: 160px;

        .hero__texts {
            width: 100%;
            align-items: center;
            text-align: center;

            .hero__header {
                width: 100%;
                text-align: center;
                
                h1 {
                    width: 100%;                    
                }

                p {
                    width: 100%;
                }
            }
        }
    }    

    @media (max-width: 320px) {
        padding: 0 1rem;
    }
`

export const Hero__illustration = styled.div`
    position: relative;
    margin-bottom: -3px;
    
    @media (max-width: 1220px) {
        width: 70%
    }
    
    @media (max-width: 425px) {
        width: 100%        
    }

    @media (max-width: 320px) {
        ${responsiveHiddenDisplay}
    }
`

export const Detalhes__wrapper = styled.section`
    background-color: #fff;
    ${Inner_fontStyle}
    display: flex;
    flex-direction: column;
    gap: 4.25rem;
    padding: 5rem 10vw;
    width: 100%;
    
    @media (max-width: 1220px) {
        padding: 5rem 1.5rem;
        gap: 1rem;
    }
    @media (max-width: 320px) {
        padding: 3rem 0rem;
    }
`

export const Detalhes__container = styled.div`
    padding: 0 5vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4.25rem;
        header {
            display: flex;
            flex-direction: column;
            gap: 2.75rem;
            color: #000;
            width: 100%;
            
            hgroup {
                width: 100%;
                color: #432E98;
                
                display: flex;
                align-items: center;
                gap: 1rem;
                
                hr {
                    background-color: #432e9890;
                    height: 2px;
                    width: 8%;
                    border: none;
                    padding: 0;                
                }

                p:nth-of-type(1) {
                    font-weight: 600;
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

export const Detalhes__footer = styled.div`
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