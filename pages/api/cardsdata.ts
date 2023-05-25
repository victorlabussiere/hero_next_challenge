import type { NextApiRequest, NextApiResponse } from 'next'
import { Idiomas_CardData } from '../../components/ui/Cards/types/cardList.types'
import { MOCK_DATA } from '../../utils/mock_helpers'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Idiomas_CardData>) {

  const data: Promise<Idiomas_CardData> = fetch('http://localhost:3001/cards')
    .then(res => res.json())
    .catch(err => err.json())

  try {
    return res.status(200).json(await data)
  } catch (e) {
    console.error('Não foi possível receber os dados relacionados aos Cards')
    return res.status(200).json(MOCK_DATA)
  }
}
