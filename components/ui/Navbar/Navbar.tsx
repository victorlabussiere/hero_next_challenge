import Image from "next/image";
import { useState } from "react";

import { PrimaryButton, SecundaryButton, TertiaryButton } from '../Buttons/Buttons'
import { SolucoesSubMenu } from "./solucoesSubMenu/SolucoesSubMenu";
import { IdiomaSubMenu } from "./idiomaSubMenu/IdiomaSubMenu";

import { Navbar__wrapper, Navbar_buttons__wrapper, Linklist_wrapper, Menu_responsivo__wrapper } from "./navbar.styles";
import { Idioma_submenu__wrapper } from "./idiomaSubMenu/idiomas.styles";

import { setSubMenuIcon } from "../../../utils/nav_helpers";
import { NavbarTexts, idiomaDataType } from "../../../types";

const Navbar = function (
    { idiomasSubmenu, texts, thisPath }: {
        idiomasSubmenu: idiomaDataType[],
        texts: NavbarTexts,
        thisPath: string
    }) {

    // controlador de estados dos submenu idiomas
    const iconIdioma: string = setSubMenuIcon(thisPath).idioma
    const iconImgPath: string = setSubMenuIcon(thisPath).imgPath
    const iconImgAlt: string = setSubMenuIcon(thisPath).imgAlt
    const [modalIdiomas, setModalIdiomas] = useState(false)
    const [respIdiomas, setRespIdiomas] = useState(false)

    // controlador de estados do submenu soluções
    const [responsiveMenuDisplay, setResponsiveMenuDisplay] = useState(false)
    const [respSolucoes, setRespSolucoes] = useState(false)
    const [listaSolucoes, setListaSolucoes] = useState(false)

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
                <li className="main_solucoes">
                    <div
                        className="stateManager"
                        onMouseEnter={() => setListaSolucoes(true)}
                        onClick={() => setListaSolucoes(!listaSolucoes)}
                    >
                        <p>{texts.solucoes || ''}</p>
                        <i className="material-symbols-outlined">arrow_drop_down</i>
                    </div>
                    {listaSolucoes
                        ? <div onMouseLeave={() => setListaSolucoes(false)}>
                            <SolucoesSubMenu modal={texts.modal || ''} />
                        </div>
                        : ''
                    }
                </li>

                <li>{texts.precos || ''}</li>
                <li>{texts.academy || ''}</li>
                <li>{texts.blog || ''}</li>
                <li>{texts.contato || ''}</li>
            </Linklist_wrapper>

            <span className="verticalRow"></span>

            <Navbar_buttons__wrapper>

                <TertiaryButton text={texts.buttonText.secundary || ''} icon='material-symbols-outlined' iconClass="account_circle" />
                <SecundaryButton text={texts.buttonText.primary || ''} />

                <Idioma_submenu__wrapper
                >
                    <div
                        className='stateManager'
                        onMouseEnter={() => setModalIdiomas(true)}
                        onClick={() => setModalIdiomas(!modalIdiomas)}
                    >
                        <Image
                            alt={iconImgAlt}
                            width={16}
                            height={16}
                            src={'/image/navbar-assets/flags/' + iconImgPath + '.png'}
                        />
                        <TertiaryButton text={iconIdioma} icon='material-symbols-outlined' iconClass='arrow_drop_down' />
                    </div>

                    {modalIdiomas
                        ? <div className="idiomasContainer" onMouseLeave={() => setModalIdiomas(false)} onClick={() => setModalIdiomas(!modalIdiomas)} >
                            <IdiomaSubMenu data={idiomasSubmenu} selected={iconIdioma} />
                        </div>
                        : ''
                    }


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
                                onClick={() => setRespIdiomas(true)}
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

                            {respIdiomas ? <div className="idiomasContainer" onClick={() => setRespIdiomas(!respIdiomas)}>
                                <IdiomaSubMenu data={idiomasSubmenu} selected={iconIdioma} />
                            </div>
                                : ''
                            }

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

                    <li className="solucoesResponsiveItem"
                        onClick={() => setRespSolucoes(!respSolucoes)}
                    >

                        <div className="stateManager" >
                            <p onClick={() => setRespSolucoes(!respSolucoes)}>
                                {texts.solucoes || ''}
                            </p>
                            <i className="material-symbols-outlined"
                                onClick={() => setRespSolucoes(!respSolucoes)}>
                                arrow_drop_down
                            </i>
                        </div>

                        {respSolucoes
                            ? <SolucoesSubMenu modal={texts.modal} />
                            : ''
                        }

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