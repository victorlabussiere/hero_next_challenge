import Image from "next/image";
import { arrSelectProps } from '../Types'

import { ModalSolucoes } from "./modalSolucoes/ModalSolucoes";
import { PrimaryButton, SecundaryButton, TertiaryButton } from '../Buttons/Buttons'
import { IdiomaSet } from "./idiomaSet/IdiomaSet";

import { NavWrapper, ActionWrapper, ListWrapper, ResponsiveMenu } from "./navbar.styles";
import { useState } from "react";

const ArrIdiomas: arrSelectProps = [
    { idioma: 'PT', imgAlt: 'BRASIL', imgPath: 'brFlag' },
    { idioma: 'EN', imgAlt: 'EUA', imgPath: 'usaFlag' },
    { idioma: 'ES', imgAlt: 'SPAIN', imgPath: 'spainFlag' }
]


const Navbar: React.FC = function () {
    const [responsiveMenuDisplay, setResponsiveMenuDisplay] = useState(false)

    return (
        <>
            {/* Nav */}
            <NavWrapper>

                <Image className="logo-ensinio" src='/image/logo/ensinio-logo.png' width={158.71} height={40} alt='Ensinio logo'></Image>

                <ListWrapper>
                    <li>
                        <ModalSolucoes />
                    </li>

                    <li>Preços</li>
                    <li>Academy</li>
                    <li>Blog</li>
                    <li>Contato</li>
                </ListWrapper>

                <span className="verticalRow"></span>

                <ActionWrapper>

                    <TertiaryButton text='Entrar' icon='material-symbols-outlined' iconText="account_circle" />
                    <SecundaryButton text='Começar agora' />
                    <IdiomaSet data={ArrIdiomas} />

                </ActionWrapper>
            </NavWrapper >

            {/* Responsive Nav => max-width 1220px */}
            < NavWrapper className="responsiveNav" >
                <Image
                    className="logo-ensinio"
                    src='/image/ensinio-logo.png'
                    width={158.71}
                    height={40}
                    alt='Ensinio logo'>
                </Image>

                <div onClick={() => setResponsiveMenuDisplay(true)}>
                    <TertiaryButton
                        icon='material-symbols-outlined'
                        iconText="menu"
                        text=''
                    />
                </div>

                <ResponsiveMenu
                    className={!responsiveMenuDisplay ? 'hidden' : ''}
                    id='responsiveMenu'
                >
                    <header>

                        <nav>
                            <TertiaryButton icon='material-symbols-outlined' text={'Entrar'} iconText="account_circle" />
                            <IdiomaSet data={ArrIdiomas} />
                        </nav>

                        <span className="verticalRow"></span>

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

                        <li id='responsiveSolInteraction'>
                            <ModalSolucoes />
                        </li>

                        <li>Preços</li>
                        <li>Carreiras</li>
                        <li>Contato</li>
                    </ul>

                    <PrimaryButton text='Começar' />
                </ResponsiveMenu>

            </ NavWrapper>

        </>
    )
}

export default Navbar;