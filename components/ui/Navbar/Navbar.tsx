import Image from "next/image";
import { useState } from "react";

import { PrimaryButton, SecundaryButton, TertiaryButton } from '../Buttons/Buttons'
import { SolucoesSubMenu } from "./solucoesSubMenu/SolucoesSubMenu";
import { IdiomaSubMenu } from "./idiomaSubMenu/IdiomaSubMenu";

import { Navbar__wrapper, Navbar_buttons__wrapper, Linklist_wrapper, Menu_responsivo__wrapper } from "./navbar.styles";
import { Idioma_submenu__wrapper } from "./idiomaSubMenu/idiomas.styles";

import { NavbarTexts, idiomaDataType } from "../../../types";
import { useRouter } from "next/router";

const Navbar = function (
    { idiomaData, texts }: {
        idiomaData: idiomaDataType[],
        texts: NavbarTexts,
    }) {

    const mockSub: idiomaDataType[] =
        [
            {
                idioma: '',
                imgAlt: '',
                imgPath: ''
            },
            {
                idioma: '',
                imgAlt: '',
                imgPath: ''
            },
            {
                idioma: '',
                imgAlt: '',
                imgPath: ''
            }
        ]


    const route = useRouter()
    const { asPath } = route
    // menu responsivo display control
    const [responsiveMenuDisplay, setResponsiveMenuDisplay] = useState(false)
    // idiomas state control
    const selected = asPath.slice(1)
    const path = asPath
    const alt = ''

    // controllers
    const toggleSubMenu = function (elementClass: string) {
        const modal = document.getElementById(elementClass)
        modal?.classList.toggle('hidden')
    }

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
                            alt={alt}
                            width={16}
                            height={16}
                            src={'/image/navbar-assets/flags' + path + '.png'}
                        />
                        <TertiaryButton text={selected} icon='material-symbols-outlined' iconClass='arrow_drop_down' />
                    </div>

                    <div
                        id='idiomaSelections'
                        className="hidden idiomasContainer"
                        onMouseLeave={() => toggleSubMenu('idiomaSelections')}
                    >
                        <IdiomaSubMenu
                            data={idiomaData || mockSub}
                            selected={asPath.slice(1)}
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
                                    alt={alt}
                                    width={16}
                                    height={16}
                                    src={'/image/navbar-assets/flags/' + asPath.slice(1) + '.png'}
                                    className="responSiveMenuSettings"
                                />
                                <TertiaryButton text={asPath.slice(1)} icon='material-symbols-outlined' iconClass='arrow_drop_down' />
                            </div>

                            <div
                                id='respIdiomaSelections'
                                className="hidden idiomasContainer"
                            >
                                <IdiomaSubMenu
                                    data={idiomaData}
                                    selected={asPath.slice(1)}
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