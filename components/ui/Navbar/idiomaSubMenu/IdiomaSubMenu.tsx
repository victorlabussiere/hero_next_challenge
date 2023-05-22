import Image from 'next/image'
import { Idioma_list__wrapper, Idioma_link } from './idiomas.styles'
import { IdiomaSubmenuType } from '../../../../types'


export const IdiomaSubMenu = function ({ data, selected }: IdiomaSubmenuType) {

    return (
        <Idioma_list__wrapper>

            {data.map((dt, index) =>
                <Idioma_link
                    href={`/${dt.idioma}`}
                    key={index + 1}
                    className={selected === dt.idioma ? 'selectedItem' : ''}
                >
                    <Image
                        alt={dt.imgAlt}
                        width={16}
                        height={16}
                        src={'/image/navbar-assets/flags/' + dt.imgPath + '.png'}
                    />

                    <p>{dt.idioma}</p>

                    <i className={selected === dt.idioma
                        ? "material-symbols-outlined check"
                        : 'hideCheck'
                    }> done </i>

                </ Idioma_link>
            )}
        </Idioma_list__wrapper>
    )
}