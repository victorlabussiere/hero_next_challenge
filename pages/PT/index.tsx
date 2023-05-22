'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

import Navbar from '../../components/ui/Navbar/Navbar'
import { CardList } from "../../components/ui/Cards/CardsList"
import { PrimaryButton, TertiaryButton } from "../../components/ui/Buttons/Buttons"

import { Hero__wrapper, Hero__container, Hero__illustration, Detalhes__container, Detalhes__wrapper, Detalhes__footer } from "../../styles/styles"
import { MOCK_NAVBAR_TEXTS } from "../../utils/mock_helpers"

export default function Home() {
  const [cardList, setCardList] = useState([])

  const [navProps, setNavProps] = useState(MOCK_NAVBAR_TEXTS.PT)
  const [subMenu, setSubMenu] = useState([])

  useEffect(() => {

    fetch('/api/mockdb')
      .then(res => res.json())
      .then(data => data.PT)
      .then(res => {
        setNavProps(res)
        setSubMenu(res.submenu)
      })
      .catch(err => console.error('Erro na seleção de idiomas', err))
      .finally(() => {
        fetch('/api/cardsdata')
          .then(res => res.json())
          .then(data => setCardList(data.PT))
          .catch(err => console.error('erro', err))
      })

  }, [])

  return (
    <>
      <Navbar
        idiomaData={subMenu}
        texts={navProps}
      />

      <main>
        <Hero__wrapper>
          <Hero__container>

            <div className="hero__texts">

              <div className="hero__label">

                <Image src='/image/hero-assets/hero-icons/custom-icons/device-icon.png' width={24} height={24} alt="Music, Audio/Devices, Mobile, Computer" />
                <p>PLATAFORMA ALL IN ONE</p>

              </div>

              <div className="hero__header">

                <h1>Sua escola online poderosa e lucrativa</h1>
                <p>Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema EAD completo.</p>

              </div>

              <div className="hero__CTAs">
                <PrimaryButton text='Começar agora' />

                <TertiaryButton
                  text='Ver vídeo'
                >
                  <Image src='/image/hero-assets/hero-icons/custom-icons/play.png' width={24} height={24} alt="play icon button" />
                </TertiaryButton>

              </div>

            </div>

            <Hero__illustration>
              <Image
                layout="responsive"
                src='/image/hero-assets/illustration/hero-image.png'
                width={658.53}
                height={533}
                alt='Ilustração da hero'
                priority
              />
            </Hero__illustration>

          </Hero__container>
        </Hero__wrapper>

        <Detalhes__wrapper>

          <Detalhes__container>

            <header>
              <hgroup>
                <hr />
                <p>PENSAMOS EM CADA DETALHE</p>
                <p>Conheça alguns de nossos recursos ⚡</p>
              </hgroup>
              <h2>Queremos que o aluno se sinta confortável enquanto aprende</h2>
            </header>

            <CardList data={cardList} />

            <Detalhes__footer>
              <div>
                <Image src='/image/hero-assets/hero-icons/custom-icons/promotion-rocket.png' width={32} height={32} alt="Promotion, Rocket" />
                <p> Veja todos os outros recursos disponíveis para te ajudar</p>
              </div>

              <div>
                <p> Veja mais</p>
                <Image src='/image/hero-assets/hero-icons/custom-icons/custom-right-arrow.png'
                  width={32}
                  height={24}
                  alt='Custom Arrow' />
              </div>
            </Detalhes__footer>
          </Detalhes__container>
        </Detalhes__wrapper>

      </main >
    </>
  )
}
