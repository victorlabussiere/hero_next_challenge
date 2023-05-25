import { useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { LayoutContext } from '../../../Layout/Layout'

import { Idioma_list__wrapper, Idioma_link } from './idiomas.styles'

export const IdiomaSubMenu = function () {

    const route = useRouter()

    const { subMenu, setSelectIdioma, selectIdioma } = useContext(LayoutContext)

    return (
        <Idioma_list__wrapper>

            {subMenu ? subMenu.map((dt, index) =>
                <Idioma_link
                    key={index + 1}
                    className={selectIdioma === dt.idioma ? 'selectedItem' : ''}
                    onClick={() => {
                        if (setSelectIdioma) {
                            setSelectIdioma(dt.idioma)
                            return route.replace(`/${selectIdioma}`)
                        } else return ''
                    }}
                >
                    <Image
                        alt={dt.imgAlt}
                        width={16}
                        height={16}
                        src={'/image/navbar-assets/flags/' + dt.imgPath + '.png'}
                    />

                    <p>{dt.idioma}</p>

                    <i className={selectIdioma === dt.idioma
                        ? "material-symbols-outlined check"
                        : 'hideCheck'
                    }> done </i>

                </ Idioma_link>
            ) : ''}
        </Idioma_list__wrapper >
    )
}