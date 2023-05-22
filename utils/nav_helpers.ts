import { idiomaDataType } from "../types"

export const setSubMenuIcon = function (path: string): idiomaDataType {
    /** @param {string} path: deve receber uma string com o path atual da aplicação /^[A-Z]{2}/*/
    /** Função responsável por fazer o controle de dados que serão utilizados pelo navbar. */

    const PT: idiomaDataType = {
        idioma: 'PT',
        imgPath: 'brasil-flag',
        imgAlt: 'Brasil flag'
    }
    const EN: idiomaDataType = {
        idioma: 'EN',
        imgPath: 'usa-flag',
        imgAlt: 'USA flag'
    }
    const ES: idiomaDataType = {
        idioma: 'ES',
        imgPath: 'spain-flag',
        imgAlt: 'Spain flag'
    }
    const dfl: idiomaDataType = {
        idioma: '',
        imgPath: '',
        imgAlt: ''
    }


    switch (path) {
        case 'PT':
            return PT
        case 'EN':
            return EN
        case 'ES':
            return ES
        default:
            return dfl
    }

}

export const toggleSubMenu = function (elementClass: string): void {
    /** @param {string} elementClass: string referente ao ID do elemento DOM que terá seu display alterado  */
    const modal = document.getElementById(elementClass)
    modal?.classList.toggle('hidden')

    return void (0)
}