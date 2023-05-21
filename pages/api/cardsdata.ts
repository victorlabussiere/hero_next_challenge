import type { NextApiRequest, NextApiResponse } from 'next'
import { CardData } from '../../components/ui/Cards/types'

export default async function handler(req: NextApiRequest, res: NextApiResponse<CardData[]>) {

  const data: Promise<CardData[]> = fetch('http://localhost:3001/cards')
    .then(res => res.json())
    .catch(err => (err.message).json())

  return await res.status(200).json(await data)
}
