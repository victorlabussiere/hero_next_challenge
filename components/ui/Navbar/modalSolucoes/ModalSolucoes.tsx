import Image from "next/image"

import { ModalHeaderWrapper, ModalWrapper } from "./modal.styles"
import { useState } from "react"

export function ModalSolucoes(): JSX.Element {
    const [modalState, setModalState] = useState(false)
    return (
        <>
            <ModalHeaderWrapper
                onMouseEnter={() => setModalState(true)}
                onClick={() => setModalState(!modalState)}
            >
                <p>Soluções</p>
                <i className="material-symbols-outlined">arrow_drop_down</i>
            </ModalHeaderWrapper>

            <ModalWrapper
                id="modalSolucoes"
                className={modalState ? "" : 'hidden'}
                onMouseLeave={() => setModalState(false)}
            >
                <h4>Soluções principais</h4>
                <ul className="modalContent">
                    <li className="card">
                        <Image src='/image/cards-icons/ead.png' width={40} height={40} alt='Ensino a Distância' />
                        <aside className="cardContent">
                            <h4>Crie uma Escola Online</h4>
                            <p>Lorem ipsum dolor sit amet</p>
                        </aside>
                    </li>

                    <li className="card">
                        <Image src='/image/cards-icons/icon-social.png' width={40} height={40} alt='Ensino a Distância' />
                        <aside className="cardContent">
                            <h4>Comunidade e rede social</h4>
                            <p>Lorem ipsum dolor sit amet</p>
                        </aside>
                    </li>

                    <li className="card"
                    >
                        <Image src='/image/cards-icons/gamification.png' width={40} height={40} alt='Ensino a Distância' />
                        <aside className="cardContent">
                            <h4>Gamificação</h4>
                            <p>Lorem ipsum dolor sit amet</p>
                        </aside>
                    </li>

                    <li className="card">
                        <Image src='/image/cards-icons/icon-app.png' width={40} height={40} alt='Ensino a Distância' />
                        <aside className="cardContent">
                            <h4>Aplicativo mobile</h4>
                            <p>Lorem ipsum dolor sit amet</p>
                        </aside>
                    </li>
                </ul>
            </ModalWrapper>
        </>
    )
}