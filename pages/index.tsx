'use client'
import Image from "next/image"

import { useEffect, useState } from "react"
import { CardList } from "../components/ui/Cards/CardsList"
import { SectionContainer, SectionWrapper, SectionFooterWrapper } from "./styles/index.styles"

export default function Home() {

  const [cardList, setCardList] = useState([])

  useEffect(() => {
    fetch('/api/cardsdata')
      .then(res => res.json())
      .then(data => setCardList(data))
      .catch(err => console.log('error', err))
  }, [])

  return (

    <main>
      <h1>vascooo</h1>
      <h1>vascooo</h1>
      <h1>vascooo</h1>
      <SectionWrapper>
        <SectionContainer>
          <header>
            <hgroup>
              <hr />
              <p>PENSAMOS EM CADA DETALHE</p>
              <p>Conheça alguns de nossos recursos ⚡</p>
            </hgroup>
            <h2>Queremos que o aluno se sinta confortável enquanto aprende</h2>
          </header>

          <CardList data={cardList} />

          <SectionFooterWrapper className="sectionFooter">
            <div>
              <Image src='/image/custom-icons/promotion-rocket.png' width={32} height={32} alt="Promotion, Rocket" />
              <p> Veja todos os outros recursos disponíveis para te ajudar</p>
            </div>

            <div>
              <p> Veja mais</p>
              <Image src='/image/custom-icons/custom-right-arrow.png' width={32} height={24} alt='Custom Arrow' />
            </div>
          </SectionFooterWrapper>
        </SectionContainer>

      </SectionWrapper>
    </main>

  )
}
