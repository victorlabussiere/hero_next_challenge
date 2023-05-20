// react 
import Image from "next/image";
import { useState } from "react";

// components | types
import { PrimaryButton, SecundaryButton, TertiaryButton } from '../Buttons/Buttons'
import { SolucoesSubMenu } from "./solucoesSubMenu/SolucoesSubMenu";
import { IdiomaSubMenu } from "./idiomaSubMenu/idiomaSubMenu";
import { arrSelectProps } from '../Types'

// styled-components
import { NavWrapper, AcoesWrapper, LinksWrapper, MenuResponsiveWrapper } from "./navbar.styles";

const ArrIdiomas: arrSelectProps = [
    { idioma: 'PT', imgAlt: 'BRASIL', imgPath: 'brFlag' },
    { idioma: 'EN', imgAlt: 'EUA', imgPath: 'usaFlag' },
    { idioma: 'ES', imgAlt: 'SPAIN', imgPath: 'spainFlag' }
]

const Navbar: React.FC = function () {

    const [responsiveMenuDisplay, setResponsiveMenuDisplay] = useState(false)

    const toggleModal = function () {
        const modal = document.getElementById('modalSolucoes')
        modal?.classList.toggle('hidden')
    }

    const toggleRespModal = function () {
        const modal = document.getElementById('respModalSolucoes')
        modal?.classList.toggle('hidden')
    }

    return (
        <NavWrapper>

            <Image
                className="logo-ensinio"
                src='/image/logo/ensinio-logo.png'
                width={158.71}
                height={40}
                alt='Ensinio logo'>

            </Image>

            <LinksWrapper>
                <li>
                    <div className="stateManager" onMouseEnter={toggleModal}>
                        <p>Soluções</p>
                        <i className="material-symbols-outlined">arrow_drop_down</i>
                    </div>
                    <div className="modalState hidden" id="modalSolucoes" onMouseLeave={toggleModal}>
                        <SolucoesSubMenu />
                    </div>
                </li>

                <li>Preços</li>
                <li>Academy</li>
                <li>Blog</li>
                <li>Contato</li>
            </LinksWrapper>

            <span className="verticalRow"></span>

            <AcoesWrapper>

                <TertiaryButton text='Entrar' icon='material-symbols-outlined' iconText="account_circle" />
                <SecundaryButton text='Começar agora' />
                <IdiomaSubMenu data={ArrIdiomas} />

            </AcoesWrapper>

            <div
                className="burgerMenu"
                onClick={() => setResponsiveMenuDisplay(true)}>
                <TertiaryButton
                    icon='material-symbols-outlined'
                    iconText="menu"
                    text=''
                />
            </div>

            <MenuResponsiveWrapper
                className={!responsiveMenuDisplay ? 'hidden' : ''}
                id='responsiveMenu'
            >
                <header>

                    <nav>
                        <TertiaryButton icon='material-symbols-outlined' text={'Entrar'} iconText="account_circle" />
                        <IdiomaSubMenu data={ArrIdiomas} />
                    </nav>

                    <span className="respVerticalRow"></span>

                    <i
                        className="iconClose"
                        onClick={() => setResponsiveMenuDisplay(false)}>
                        <TertiaryButton
                            text=''
                            icon='material-symbols-outlined'
                            iconText={'close'}
                        />
                    </i>

                </header>

                <ul className="responsiveListItems">

                    <li onClick={toggleRespModal}>
                        <div className="stateManager" >
                            <p>Soluções</p>
                            <i className="material-symbols-outlined">arrow_drop_down</i>
                        </div>
                        <div className="modalState hidden" id="respModalSolucoes" onMouseLeave={toggleRespModal}>
                            <SolucoesSubMenu />
                        </div>
                    </li>

                    <li>Preços</li>
                    <li>Carreiras</li>
                    <li>Contato</li>
                </ul>

                <PrimaryButton text='Começar' />
            </MenuResponsiveWrapper>


        </NavWrapper >
    )
}

export default Navbar;