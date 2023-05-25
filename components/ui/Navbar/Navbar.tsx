import Image from "next/image";
import { useContext, useState } from "react";

import { LayoutContext } from "../../Layout/Layout";
import { IdiomaSubMenu } from "./idiomaSubMenu/IdiomaSubMenu";
import { SolucoesSubMenu } from "./solucoesSubMenu/SolucoesSubMenu";
import { PrimaryButton, SecundaryButton, TertiaryButton } from '../Buttons/Buttons'

import { setSubMenuIcon } from '../../../utils/nav_helpers'
import { Idioma_submenu__wrapper } from "./idiomaSubMenu/idiomas.styles";
import { Navbar__wrapper, Navbar_buttons__wrapper, Linklist_wrapper, Menu_responsivo__wrapper } from "./navbar.styles";

const Navbar = function () {

    const [listaSolucoes, setListaSolucoes] = useState(false)
    const [modalIdiomas, setModalIdiomas] = useState(false)

    const [respSolucoes, setRespSolucoes] = useState(false)
    const [responsiveMenuDisplay, setResponsiveMenuDisplay] = useState(false)
    const [respIdiomas, setRespIdiomas] = useState(false)

    const { idioma, selectIdioma } = useContext(LayoutContext)

    const icon = setSubMenuIcon(selectIdioma)

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
                        <p>{idioma ? idioma.solucoes : ''}</p>
                        <i className="material-symbols-outlined">arrow_drop_down</i>
                    </div>
                    {listaSolucoes
                        ? <div onMouseLeave={() => setListaSolucoes(false)}>
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
                        onMouseEnter={() => setModalIdiomas(true)}
                        onClick={() => setModalIdiomas(!modalIdiomas)}
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
                            className="idiomasContainer" onMouseLeave={() => setModalIdiomas(false)} onClick={() => setModalIdiomas(!modalIdiomas)} >

                            <IdiomaSubMenu />
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


            {responsiveMenuDisplay ?
                <Menu_responsivo__wrapper>
                    <header>
                        <nav>
                            <TertiaryButton icon='material-symbols-outlined' text={'Entrar'} iconClass="account_circle" />
                            <Idioma_submenu__wrapper>

                                <div className='stateManager' onClick={() => setRespIdiomas(!respIdiomas)} >
                                    <Image
                                        alt={icon.imgAlt}
                                        width={16}
                                        height={16}
                                        src={'/image/navbar-assets/flags/' + icon.imgPath + '.png'}
                                        className="responSiveMenuSettings" />

                                    <TertiaryButton text={selectIdioma} icon='material-symbols-outlined' iconClass='arrow_drop_down' />
                                </div>

                                {respIdiomas
                                    ? <div className="idiomasContainer" onClick={() => setRespIdiomas(!respIdiomas)}>
                                        <IdiomaSubMenu />
                                    </div> : ''}

                            </Idioma_submenu__wrapper >
                        </nav>

                        <span className="respVerticalRow"></span>

                        <i className="iconClose" onClick={() => setResponsiveMenuDisplay(false)}>
                            <TertiaryButton text='' icon='material-symbols-outlined' iconClass={'close'} />
                        </i>

                    </header>

                    <ul className="responsiveListItems">

                        <li className="solucoesResponsiveItem"
                            onClick={() => setRespSolucoes(!respSolucoes)}
                        >

                            <div className="stateManager" >
                                <p onClick={() => setRespSolucoes(!respSolucoes)}>
                                    {idioma ? idioma.solucoes : ''}
                                </p>
                                <i className="material-symbols-outlined"
                                    onClick={() => setRespSolucoes(!respSolucoes)}>
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