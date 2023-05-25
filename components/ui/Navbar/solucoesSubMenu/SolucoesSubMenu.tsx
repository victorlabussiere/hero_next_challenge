import Image from "next/image"

import { Modal__wrapper, Modal__list, Modal__card } from "./solucoes.styles"
import { NavbarModals } from "../types/navbar.types"

export function SolucoesSubMenu({ modal }: { modal: NavbarModals }): JSX.Element {

    return (
        <Modal__wrapper
            id="modalSolucoes"
        >
            <h4>{modal.header}</h4>
            <Modal__list>
                <Modal__card className="card">
                    <Image
                        src='/image/navbar-assets/cards-icons/ead.png'
                        width={40}
                        height={40}
                        alt='Ensino a Distância' />
                    <aside className="cardContent">
                        <h4>{modal.title1}</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </aside>
                </Modal__card>

                <Modal__card className="card">
                    <Image src='/image/navbar-assets/cards-icons/icon-social.png' width={40} height={40} alt='Ensino a Distância' />
                    <aside className="cardContent">
                        <h4>{modal.title2}</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </aside>
                </Modal__card>

                <Modal__card className="card"
                >
                    <Image src='/image/navbar-assets/cards-icons/gamification.png' width={40} height={40} alt='Ensino a Distância' />
                    <aside className="cardContent">
                        <h4>{modal.title3}</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </aside>
                </Modal__card>

                <Modal__card className="card">
                    <Image src='/image/navbar-assets/cards-icons/icon-app.png' width={40} height={40} alt='Ensino a Distância' />
                    <aside className="cardContent">
                        <h4>{modal.title4}</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </aside>
                </Modal__card>
            </Modal__list>
        </Modal__wrapper>
    )
}