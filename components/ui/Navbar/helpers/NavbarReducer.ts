import { Action, State } from '../types/navbar.types'

export const initialState: State = {
    listaSolucoes: false,
    modalIdiomas: false,
    respSolucoes: false,
    responsiveMenuDisplay: false,
    respIdiomas: false,
};

export const actionTypes = {
    SET_LISTA_SOLUCOES: 'SET_LISTA_SOLUCOES',
    SET_MODAL_IDIOMAS: 'SET_MODAL_IDIOMAS',
    SET_RESP_SOLUCOES: 'SET_RESP_SOLUCOES',
    SET_RESPONSIVE_MENU_DISPLAY: 'SET_RESPONSIVE_MENU_DISPLAY',
    SET_RESP_IDIOMAS: 'SET_RESP_IDIOMAS',
}

export const navbarRreducer = (state: State, action: Action) => {
    switch (action.type) {
        case actionTypes.SET_LISTA_SOLUCOES:
            return { ...state, listaSolucoes: action.payload };
        case actionTypes.SET_MODAL_IDIOMAS:
            return { ...state, modalIdiomas: action.payload };
        case actionTypes.SET_RESP_SOLUCOES:
            return { ...state, respSolucoes: action.payload };
        case actionTypes.SET_RESPONSIVE_MENU_DISPLAY:
            return { ...state, responsiveMenuDisplay: action.payload };
        case actionTypes.SET_RESP_IDIOMAS:
            return { ...state, respIdiomas: action.payload };
        default:
            return state;
    }
};


