import Image from "next/image"

import { ModalWrapper } from "./solucoes.styles"

export function SolucoesSubMenu(): JSX.Element {

    return (
        <ModalWrapper
            id="modalSolucoes"
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
    )
}