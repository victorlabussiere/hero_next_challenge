import Image from "next/image"

import { CardData } from "./types"
import { CardWrapper, CardContainerWrapper } from "./cardsList.style"

type propCardType = { data: CardData[] }
export const CardList = function ({ data }: propCardType): JSX.Element {
    return (
        <CardContainerWrapper>
            {data.map((card, i) => {
                return (
                    <CardWrapper key={i + 1}>
                        <Image src={`/image/hero-cards-icon/${card.imgPath}.png`} alt={card.imgAlt} width={40} height={40} />
                        <article className="cardContent">
                            <h4>{card.cardTitle}</h4>
                            <p>{card.cardText}</p>
                        </article>
                    </CardWrapper>
                )
            })}
        </CardContainerWrapper>
    )
}