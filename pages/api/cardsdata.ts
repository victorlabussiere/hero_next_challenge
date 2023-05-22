import type { NextApiRequest, NextApiResponse } from 'next'
import { CardData } from '../../components/ui/Cards/types'

export default async function handler(req: NextApiRequest, res: NextApiResponse<CardData[]>) {

  const MOCK_DATA: CardData[] = [
    {
      imgPath: "icon-trilhas",
      imgAlt: "icon-trilhas",
      cardTitle: "Trilhas e Etapas",
      cardText: "Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar."
    },
    {
      imgPath: "icon-playlists",
      imgAlt: "icon-playlists",
      cardTitle: "Playlists",
      cardText: "Transforme uma coleção em uma playlist para poder ver vídeos e áudios em sequência offline."
    },
    {
      imgPath: "icon-folder",
      imgAlt: "icon-playlists",
      cardTitle: "Coleções",
      cardText: "Crie coleções, adicione conteúdos, reorganize ítens e deixe tudo do seu jeito para melhorar a experiência."
    }
  ]

  const data: Promise<CardData[]> = fetch('http://localhost:3001/cards')
    .then(res => res.json())
    .catch(err => err.json())

  try {
    return await res.status(200).json(await data)
  } catch (e) {
    console.error('Não foi possível receber os dados relacionados aos Cards')
    return res.status(200).json(MOCK_DATA)
  }

}
