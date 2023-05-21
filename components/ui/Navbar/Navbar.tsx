// react 
import Image from "next/image";
import { useState } from "react";

// components | types
import { PrimaryButton, SecundaryButton, TertiaryButton } from '../Buttons/Buttons'
import { SolucoesSubMenu } from "./solucoesSubMenu/SolucoesSubMenu";
import { selectPropsObj } from '../types'
import { IdiomaWrapper } from "./idiomaSubMenu/idiomas.styles";

// utils
import { toggleSubMenu } from './utils'

// styled-components
import { NavWrapper, AcoesWrapper, LinksWrapper, MenuResponsiveWrapper } from "./navbar.styles";
import { IdiomaSubMenu } from "./idiomaSubMenu/IdiomaSubMenu";

const Navbar = function ({ idiomaData }: { idiomaData: selectPropsObj[] }): JSX.Element {

    // menu responsivo de links 
    const [responsiveMenuDisplay, setResponsiveMenuDisplay] = useState(false)

    // idiomas
    const [selected, setSelected] = useState(idiomaData[0].idioma)
    const [path, setPath] = useState(idiomaData[0].imgPath)
    const [alt, setAlt] = useState(idiomaData[0].imgAlt)

    const setLang = function (dt: selectPropsObj): void {
        setAlt(dt.imgAlt)
        setPath(dt.imgPath)
        setSelected(dt.idioma);
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
                    <div
                        className="stateManager"
                        onMouseEnter={() => toggleSubMenu('modalSolucoes')}
                        onClick={() => toggleSubMenu('modalSolucoes')}
                    >
                        <p>Soluções</p>
                        <i className="material-symbols-outlined">arrow_drop_down</i>
                    </div>
                    <div
                        className="modalState hidden"
                        id="modalSolucoes"
                        onMouseLeave={() => toggleSubMenu('modalSolucoes')}
                    >
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

                <IdiomaWrapper
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
                            src={'/image/flags/' + path + '.png'}
                            className="responSiveMenuSettings"
                        />
                        <TertiaryButton text={selected} icon='material-symbols-outlined' iconText='arrow_drop_down' />
                    </div>

                    <div
                        id='idiomaSelections'
                        className="hidden idiomasContainer"
                        onMouseLeave={() => toggleSubMenu('idiomaSelections')}
                    >
                        <IdiomaSubMenu
                            data={idiomaData}
                            func={setLang}
                            selected={selected}
                        />

                    </div>

                </IdiomaWrapper >

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
                        <IdiomaWrapper
                        >
                            <div
                                className='stateManager'
                                onClick={() => toggleSubMenu('respIdiomaSelections')}
                            >

                                <Image
                                    alt={alt}
                                    width={16}
                                    height={16}
                                    src={'/image/flags/' + path + '.png'}
                                    className="responSiveMenuSettings"
                                />
                                <TertiaryButton text={selected} icon='material-symbols-outlined' iconText='arrow_drop_down' />
                            </div>

                            <div
                                id='respIdiomaSelections'
                                className="hidden idiomasContainer"
                            >
                                <IdiomaSubMenu
                                    data={idiomaData}
                                    func={setLang}
                                    selected={selected}
                                />
                            </div>

                        </IdiomaWrapper >
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

                    <li >
                        <div className="stateManager" >
                            <p
                                onClick={() => toggleSubMenu('respModalSolucoes')}
                            >Soluções</p>
                            <i
                                className="material-symbols-outlined"
                                onClick={() => toggleSubMenu('respModalSolucoes')}
                            >arrow_drop_down</i>
                        </div>
                        <div
                            className="modalState hidden"
                            id="respModalSolucoes"
                        >
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