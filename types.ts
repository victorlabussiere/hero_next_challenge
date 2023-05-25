// Usado em Navbar.tsx
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

// Usado em CardList.tsx
export type CardData = {
    imgPath: string,
    imgAlt: string,
    cardTitle: string,
    cardText: string
}
export type Idiomas_CardData = {
    PT: CardData[],
    EN: CardData[],
    ES: CardData[]
}
