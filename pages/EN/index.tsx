'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

import { CardList } from "../../components/ui/Cards/CardsList"
import { PrimaryButton, TertiaryButton } from "../../components/ui/Buttons/Buttons"

import { Hero__wrapper, Hero__container, Hero__illustration, Detalhes__container, Detalhes__wrapper, Detalhes__footer } from "../../styles/styles"

export default function Home() {

  const [cardList, setCardList] = useState([])
  useEffect(() => {
    fetch('/api/cardsdata')
      .then(res => res.json())
      .then(data => setCardList(data.EN))
      .catch(err => console.error('erro', err))


  }, [])

  return (
    <>


      <main>
        <Hero__wrapper>

          <Hero__container>

            <div className="hero__texts">

              <div className="hero__label">

                <Image src='/image/hero-assets/hero-icons/custom-icons/device-icon.png' width={24} height={24} alt="Music, Audio/Devices, Mobile, Computer" />
                <p>PLATAFORMA ALL IN ONE</p>

              </div>

              <div className="hero__header">

                <h1>Your powerful and profitable online school</h1>
                <p>Have your own 100% white label online school with social network, gamification, subscription club, e-commerce, and complete LMS system.</p>

              </div>

              <div className="hero__CTAs">
                <PrimaryButton text='Start now!' />

                <TertiaryButton
                  text='See a demo'
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
                <p>WE&#39;VE THOUGHT OF EVERY DETAIL</p>
                <p>Discover some of our features ⚡</p>
              </hgroup>
              <h2>We want the student to feel comfortable while learning</h2>
            </header>

            <CardList data={cardList} />

            <Detalhes__footer>
              <div>
                <Image src='/image/hero-assets/hero-icons/custom-icons/promotion-rocket.png' width={32} height={32} alt="Promotion, Rocket" />
                <p> Check out all the other available resources to assist you</p>
              </div>

              <div>
                <p>View more</p>
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
