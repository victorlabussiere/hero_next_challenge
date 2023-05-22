export interface idiomaDataType {
    idioma: string,
    imgPath: string,
    imgAlt: string
}

export interface IdiomaSubmenuType {
    data: idiomaDataType[],
    func: (dt: idiomaDataType) => void,
    selected: string,
}
