import Image from "next/image";
import { useContext } from "react";

import { LayoutContext } from "../../Layout/context/LayoutContext";
import { IdiomaSubMenu } from "./idiomaSubMenu/IdiomaSubMenu";
import { SolucoesSubMenu } from "./solucoesSubMenu/SolucoesSubMenu";
import { PrimaryButton, SecundaryButton, TertiaryButton } from '../Buttons/Buttons'

import { setSubMenuIcon } from './helpers/nav_helpers'
import { navbarRreducer, initialState, actionTypes } from "./helpers/NavbarReducer";

import { Idioma_submenu__wrapper } from "./idiomaSubMenu/idiomas.styles";
import { Navbar__wrapper, Navbar_buttons__wrapper, Linklist_wrapper, Menu_responsivo__wrapper } from "./navbar.styles";

import { useReducer } from "react";

const Navbar = function () {
    // context states
    const { idioma, selectIdioma } = useContext(LayoutContext)
    const icon = setSubMenuIcon(selectIdioma)

    // modal states with reducer
    const [state, dispatch] = useReducer(navbarRreducer, initialState)
    const { listaSolucoes, modalIdiomas, respIdiomas, respSolucoes, responsiveMenuDisplay } = state

    // reducer helper
    const toggleModal = function (value: boolean, type: string) {
        return dispatch({ type: type, payload: !value })
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
                <li className="main_solucoes">
                    <div
                        className="stateManager"
                        onMouseEnter={() => toggleModal(listaSolucoes, actionTypes.SET_LISTA_SOLUCOES)}
                        onClick={() => toggleModal(listaSolucoes, actionTypes.SET_LISTA_SOLUCOES)}
                    >
                        <p>{idioma ? idioma.solucoes : ''}</p>
                        <i className="material-symbols-outlined">arrow_drop_down</i>
                    </div>
                    {listaSolucoes
                        ? <div
                            onMouseLeave={() => toggleModal(listaSolucoes, actionTypes.SET_LISTA_SOLUCOES)}
                        >
                            <SolucoesSubMenu modal={idioma ? idioma.modal : {}} />
                        </div>
                        : ''
                    }
                </li>

                <li>{idioma ? idioma.precos : ''}</li>
                <li>{idioma ? idioma.academy : ''}</li>
                <li>{idioma ? idioma.academy : ''}</li>
                <li>{idioma ? idioma.blog : ''}</li>
            </Linklist_wrapper>

            <span className="verticalRow"></span>

            <Navbar_buttons__wrapper>

                <TertiaryButton text={idioma ? idioma.buttonText.secundary : ''} icon='material-symbols-outlined' iconClass="account_circle" />
                <SecundaryButton text={idioma ? idioma.buttonText.primary : ''} />

                <Idioma_submenu__wrapper>
                    <div
                        className='stateManager'
                        onMouseEnter={() => toggleModal(modalIdiomas, actionTypes.SET_MODAL_IDIOMAS)}
                        onClick={() => toggleModal(modalIdiomas, actionTypes.SET_MODAL_IDIOMAS)}
                    >
                        <Image
                            alt={icon.imgAlt}
                            width={16}
                            height={16}
                            src={'/image/navbar-assets/flags/' + icon.imgPath + '.png'}
                        />

                        <TertiaryButton text={selectIdioma} icon='material-symbols-outlined' iconClass='arrow_drop_down' />
                    </div>

                    {modalIdiomas
                        ? <div
                            className="idiomasContainer"
                            onMouseLeave={() => toggleModal(modalIdiomas, actionTypes.SET_MODAL_IDIOMAS)}
                            onClick={() => toggleModal(modalIdiomas, actionTypes.SET_MODAL_IDIOMAS)} >

                            <IdiomaSubMenu />
                        </div>
                        : ''
                    }

                </Idioma_submenu__wrapper >

            </Navbar_buttons__wrapper>


            <div
                className="burgerMenu"
                onClick={() => toggleModal(responsiveMenuDisplay, actionTypes.SET_RESPONSIVE_MENU_DISPLAY)}>
                <TertiaryButton
                    icon='material-symbols-outlined'
                    iconClass="menu"
                    text=''
                />
            </div>


            {
                responsiveMenuDisplay ?
                    <Menu_responsivo__wrapper>
                        <header>
                            <nav>
                                <TertiaryButton icon='material-symbols-outlined' text={'Entrar'} iconClass="account_circle" />
                                <Idioma_submenu__wrapper>

                                    <div className='stateManager' onClick={() => toggleModal(respIdiomas, actionTypes.SET_RESP_IDIOMAS)} >
                                        <Image
                                            alt={icon.imgAlt}
                                            width={16}
                                            height={16}
                                            src={'/image/navbar-assets/flags/' + icon.imgPath + '.png'}
                                            className="responSiveMenuSettings" />

                                        <TertiaryButton text={selectIdioma} icon='material-symbols-outlined' iconClass='arrow_drop_down' />
                                    </div>

                                    {respIdiomas
                                        ? <div className="idiomasContainer" onClick={() => toggleModal(respIdiomas, actionTypes.SET_RESP_IDIOMAS)}>
                                            <IdiomaSubMenu />
                                        </div> : ''}

                                </Idioma_submenu__wrapper >
                            </nav>

                            <span className="respVerticalRow"></span>

                            <i className="iconClose" onClick={() => toggleModal(responsiveMenuDisplay, actionTypes.SET_RESPONSIVE_MENU_DISPLAY)}>
                                <TertiaryButton text='' icon='material-symbols-outlined' iconClass={'close'} />
                            </i>

                        </header>

                        <ul className="responsiveListItems">

                            <li className="solucoesResponsiveItem"
                                onClick={() => toggleModal(respSolucoes, actionTypes.SET_RESP_SOLUCOES)}
                            >

                                <div className="stateManager" >
                                    <p onClick={() => toggleModal(respSolucoes, actionTypes.SET_RESP_SOLUCOES)}>
                                        {idioma ? idioma.solucoes : ''}
                                    </p>
                                    <i className="material-symbols-outlined"
                                        onClick={() => toggleModal(respSolucoes, actionTypes.SET_RESP_SOLUCOES)}>
                                        arrow_drop_down
                                    </i>
                                </div>

                                {respSolucoes
                                    ? <SolucoesSubMenu modal={idioma ? idioma.modal : {}} />
                                    : ''
                                }

                            </li>

                            <li>{idioma ? idioma.precos : ''}</li>
                            <li>{idioma ? idioma.carreiras : ''}</li>
                            <li>{idioma ? idioma.contato : ''}</li>
                        </ul>

                        <PrimaryButton text='Começar' />
                    </Menu_responsivo__wrapper>
                    : ''
            }

        </Navbar__wrapper >
    )
}

export default Navbar;