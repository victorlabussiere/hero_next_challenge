import Image from "next/image";
import { useState } from "react";

import { PrimaryButton, SecundaryButton, TertiaryButton } from '../Buttons/Buttons'
import { SolucoesSubMenu } from "./solucoesSubMenu/SolucoesSubMenu";
import { IdiomaSubMenu } from "./idiomaSubMenu/IdiomaSubMenu";

import { Navbar__wrapper, Navbar_buttons__wrapper, Linklist_wrapper, Menu_responsivo__wrapper } from "./navbar.styles";
import { Idioma_submenu__wrapper } from "./idiomaSubMenu/idiomas.styles";

import { setSubMenuIcon, toggleSubMenu } from "../../../utils/nav_helpers";
import { NavbarTexts, idiomaDataType } from "../../../types";

const Navbar = function (
    { idiomaData, texts, thisPath }: {
        idiomaData: idiomaDataType[],
        texts: NavbarTexts,
        thisPath: string
    }) {

    const [responsiveMenuDisplay, setResponsiveMenuDisplay] = useState(false)

    const iconIdioma: string = setSubMenuIcon(thisPath).idioma
    const iconImgPath: string = setSubMenuIcon(thisPath).imgPath
    const iconImgAlt: string = setSubMenuIcon(thisPath).imgAlt

    return (
        <Navbar__wrapper>
            <Image
                className="logo-ensinio"
                src='/image/navbar-assets/logo/ensinio-logo.png'
                width={158.71}
                height={40}
                alt='Ensinio logo'>

            </Image>

            <Linklist_wrapper>
                <li>
                    <div
                        className="stateManager"
                        onMouseEnter={() => toggleSubMenu('modalSolucoes')}
                        onClick={() => toggleSubMenu('modalSolucoes')}
                    >
                        <p>{texts.solucoes || ''}</p>
                        <i className="material-symbols-outlined">arrow_drop_down</i>
                    </div>
                    <div
                        className="modalState hidden"
                        id="modalSolucoes"
                        onMouseLeave={() => toggleSubMenu('modalSolucoes')}
                    >
                        <SolucoesSubMenu
                            modal={texts.modal || ''}
                        />
                    </div>
                </li>

                <li>{texts.precos || ''}</li>
                <li>{texts.academy || ''}</li>
                <li>{texts.blog || ''}</li>
                <li>{texts.contato || ''}</li>
            </Linklist_wrapper>

            <span className="verticalRow"></span>

            <Navbar_buttons__wrapper>

                <TertiaryButton
                    text={texts.buttonText.secundary || ''}
                    icon='material-symbols-outlined'
                    iconClass="account_circle"
                />
                <SecundaryButton
                    text={texts.buttonText.primary || ''}
                />

                <Idioma_submenu__wrapper
                >
                    <div
                        className='stateManager'
                        onMouseEnter={() => toggleSubMenu('idiomaSelections')}
                        onClick={() => toggleSubMenu('idiomaSelections')}
                    >
                        <Image
                            alt={iconImgAlt}
                            width={16}
                            height={16}
                            src={'/image/navbar-assets/flags/' + iconImgPath + '.png'}
                        />
                        <TertiaryButton text={iconIdioma} icon='material-symbols-outlined' iconClass='arrow_drop_down' />
                    </div>

                    <div
                        id='idiomaSelections'
                        className="hidden idiomasContainer"
                        onMouseLeave={() => toggleSubMenu('idiomaSelections')}
                    >
                        <IdiomaSubMenu
                            data={idiomaData}
                            selected={iconIdioma}
                        />

                    </div>

                </Idioma_submenu__wrapper >

            </Navbar_buttons__wrapper>

            <div
                className="burgerMenu"
                onClick={() => setResponsiveMenuDisplay(true)}>
                <TertiaryButton
                    icon='material-symbols-outlined'
                    iconClass="menu"
                    text=''
                />
            </div>

            <Menu_responsivo__wrapper
                className={!responsiveMenuDisplay ? 'hidden' : ''}
                id='responsiveMenu'
            >
                <header>

                    <nav>
                        <TertiaryButton icon='material-symbols-outlined' text={'Entrar'} iconClass="account_circle" />
                        <Idioma_submenu__wrapper
                        >
                            <div
                                className='stateManager'
                                onClick={() => toggleSubMenu('respIdiomaSelections')}
                            >
                                <Image
                                    alt={iconImgAlt}
                                    width={16}
                                    height={16}
                                    src={'/image/navbar-assets/flags/' + iconImgPath + '.png'}
                                    className="responSiveMenuSettings"
                                />
                                <TertiaryButton text={iconIdioma} icon='material-symbols-outlined' iconClass='arrow_drop_down' />
                            </div>

                            <div
                                id='respIdiomaSelections'
                                className="hidden idiomasContainer"
                            >
                                <IdiomaSubMenu
                                    data={idiomaData}
                                    selected={iconIdioma}
                                />
                            </div>

                        </Idioma_submenu__wrapper >
                    </nav>

                    <span className="respVerticalRow"></span>

                    <i
                        className="iconClose"
                        onClick={() => setResponsiveMenuDisplay(false)}>
                        <TertiaryButton
                            text=''
                            icon='material-symbols-outlined'
                            iconClass={'close'}
                        />
                    </i>

                </header>

                <ul className="responsiveListItems">

                    <li >
                        <div className="stateManager" >
                            <p
                                onClick={() => toggleSubMenu('respModalSolucoes')}
                            >{texts.solucoes || ''}</p>
                            <i
                                className="material-symbols-outlined"
                                onClick={() => toggleSubMenu('respModalSolucoes')}
                            >arrow_drop_down</i>
                        </div>
                        <div
                            className="modalState hidden"
                            id="respModalSolucoes"
                        >
                            <SolucoesSubMenu
                                modal={texts.modal}
                            />
                        </div>
                    </li>

                    <li>{texts.precos || ''}</li>
                    <li>{texts.carreiras || ''}</li>
                    <li>{texts.contato || ''}</li>
                </ul>

                <PrimaryButton text='Começar' />
            </Menu_responsivo__wrapper>


        </Navbar__wrapper >
    )
}

export default Navbar;