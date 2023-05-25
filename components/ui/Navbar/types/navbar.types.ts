export type Action =
    | { type: 'SET_LISTA_SOLUCOES' | string; payload: boolean }
    | { type: 'SET_MODAL_IDIOMAS' | string; payload: boolean }
    | { type: 'SET_RESP_SOLUCOES' | string; payload: boolean }
    | { type: 'SET_RESPONSIVE_MENU_DISPLAY' | string; payload: boolean }
    | { type: 'SET_RESP_IDIOMAS' | string; payload: boolean };

export type State = {
    listaSolucoes: boolean;
    modalIdiomas: boolean;
    respSolucoes: boolean;
    responsiveMenuDisplay: boolean;
    respIdiomas: boolean;
};

export type idiomaDataType = {
    idioma: string,
    imgPath: string,
    imgAlt: string
}
export type NavbarModals = {
    header?: string,
    title1?: string;
    title2?: string;
    title3?: string;
    title4?: string;
}
export type NavbarTexts = {
    solucoes: string;
    precos: string;
    academy: string;
    blog: string;
    contato: string;
    carreiras: string;
    modal: NavbarModals;
    buttonText: {
        primary: string,
        secundary: string
    },
    submenu: idiomaDataType[]
}
export type NavbarDBTexts = {
    PT: NavbarTexts,
    EN: NavbarTexts,
    ES: NavbarTexts
}