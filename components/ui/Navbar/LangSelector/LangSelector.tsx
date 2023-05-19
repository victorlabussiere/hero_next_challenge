import Image from "next/image"
import { useState } from "react"

import { TertiaryButton } from "../../Buttons/Buttons"
import { LangOptsStyle, LangSelectorWrapper } from "./langSelection.style"
import { arrSelectProps, selectPropsObj } from "../../Types"

export const LangSelector = function ({ data }: { data: arrSelectProps }): JSX.Element {

    const [state, setState] = useState(false)
    const [selected, setSelected] = useState(data[0].idioma)
    const [path, setPath] = useState(data[0].imgPath)
    const [alt, setAlt] = useState(data[0].imgAlt)

    const setLang = function (dt: selectPropsObj): void {
        setState(false)
        setAlt(dt.imgAlt)
        setPath(dt.imgPath)
        setSelected(dt.idioma);
        return void (0)
    }

    return (
        <LangSelectorWrapper
            onMouseEnter={() => setState(true)}
            onClick={() => setState(!state)}
        >
            <Image
                alt={alt}
                width={16}
                height={16}
                src={'/image/flags/' + path + '.png'}
                className="responSiveMenuSettings"
            />
            <TertiaryButton text={selected} icon='material-symbols-outlined' iconText='arrow_drop_down' />

            <LangOptsStyle
                className={state ? 'optionsWrapper' : 'optionsWrapper hideOptions'}
                id='optionsWrapper'
                onMouseLeave={() => setState(false)}
            >
                {data.map((dt, index) =>
                    <li
                        value={index + 1}
                        key={index}
                        onClick={() => setLang(dt)}
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
                )
                }
            </LangOptsStyle >

        </LangSelectorWrapper>
    )
}