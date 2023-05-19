import Image from "next/image";
import { useState } from "react";

import { NavWrapper, ActionWrapper, ListWrapper, ResponsiveMenu, ModalWrapper } from "./navbar.styles";
import { PrimaryButton, SecundaryButton, TertiaryButton } from '../Buttons/Buttons'
import { LangSelector } from "./LangSelector/LangSelector";

import { arrSelectProps } from '../Types'

const ArrIdiomas: arrSelectProps = [
    { idioma: 'PT', imgAlt: 'BRASIL', imgPath: 'brFlag' },
    { idioma: 'EN', imgAlt: 'EUA', imgPath: 'usaFlag' },
    { idioma: 'ES', imgAlt: 'SPAIN', imgPath: 'spainFlag' }
]


const Navbar: React.FC = function () {

    const [state, setState] = useState(false)

    const showMenu = function () {
        const mobileMenu = document.getElementById('responsiveMenu')
        mobileMenu?.classList.toggle('hidden')
    }

    return (
        <>
            {/* default menu */}
            <NavWrapper>
                <Image className="logo-ensinio" src='/image/logo/ensinio-logo.png' width={158.71} height={40} alt='Ensinio logo'></Image>

                <ListWrapper>
                    <li>
                        <hgroup
                            onMouseEnter={() => setState(true)}
                            onClick={() => setState(!state)}
                        >
                            <p>Soluções</p>
                            <i className="material-symbols-outlined">arrow_drop_down</i>
                        </hgroup>

                        <ModalWrapper
                            className={state ? '' : "hidden"}
                            id="modalSolucoes"
                            onMouseLeave={() => setTimeout(() => setState(!state), 300)}
                        >
                            <h4>Soluções principais</h4>
                            <ul>
                                <li>
                                    <Image src='/image/cards-icons/ead.png' width={40} height={40} alt='Ensino a Distância' />
                                    <aside>
                                        <h4>Crie uma Escola Online</h4>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </aside>
                                </li>

                                <li>
                                    <Image src='/image/cards-icons/icon-social.png' width={40} height={40} alt='Ensino a Distância' />
                                    <aside>
                                        <h4>Comunidade e rede social</h4>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </aside>
                                </li>

                                <li>
                                    <Image src='/image/cards-icons/gamification.png' width={40} height={40} alt='Ensino a Distância' />
                                    <aside>
                                        <h4>Gamificação</h4>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </aside>
                                </li>

                                <li>
                                    <Image src='/image/cards-icons/icon-app.png' width={40} height={40} alt='Ensino a Distância' />
                                    <aside>
                                        <h4>Aplicativo mobile</h4>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </aside>
                                </li>
                            </ul>
                        </ModalWrapper>

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
                    <LangSelector data={ArrIdiomas} />

                </ActionWrapper>
            </NavWrapper >

            {/* responsive menu */}
            < NavWrapper className="responsiveNav" >
                <Image
                    className="logo-ensinio"
                    src='/image/ensinio-logo.png'
                    width={158.71}
                    height={40}
                    alt='Ensinio logo'>
                </Image>

                <div onClick={showMenu}>
                    <TertiaryButton
                        icon='material-symbols-outlined'
                        iconText="menu"
                        text=''
                    />
                </div>

                <ResponsiveMenu className="hidden" id='responsiveMenu'>
                    <header>
                        <nav>
                            <TertiaryButton icon='material-symbols-outlined' text={'Entrar'} iconText="account_circle" />
                            <LangSelector data={ArrIdiomas} />
                        </nav>

                        <span className="verticalRow"></span>

                        <div onClick={showMenu}>
                            <TertiaryButton
                                text=''
                                icon='material-symbols-outlined'
                                iconText={'close'}
                            />
                        </div>
                    </header>

                    <ul>
                        <li>Soluções</li>
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