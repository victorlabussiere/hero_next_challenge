import Image from 'next/image'
import { selectPropsObj } from '../../Types'
import { SelecaoIdiomasWrapper } from './idiomas.styles'

type IdiomaSubMenuType = {
    data: selectPropsObj[],
    func: (dt: selectPropsObj) => void,
    selected: string,
}

export const IdiomaSubMenu = function ({ data, func, selected }: IdiomaSubMenuType) {

    return (
        <SelecaoIdiomasWrapper>
            {data.map((dt, index) =>
                <li
                    value={index + 1}
                    key={index}
                    onClick={() => func(dt)}
                    className={selected === dt.idioma ? 'selectedItem' : ''}
                >
                    <Image
                        alt={dt.imgAlt}
                        width={16}
                        height={16}
                        src={'/image/flags/' + dt.imgPath + '.png'}
                    />

                    <p>{dt.idioma}</p>

                    <i className={selected === dt.idioma
                        ? "material-symbols-outlined check"
                        : 'hideCheck'
                    }> done </i>

                </li >
            )}
        </SelecaoIdiomasWrapper>
    )
}