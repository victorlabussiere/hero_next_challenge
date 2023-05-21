import type { NextApiRequest, NextApiResponse } from 'next'
import { CardMain } from '../../components/ui/Cards/types'

export default async function handler(req: NextApiRequest, res: NextApiResponse<CardMain[]>) {

  const data: Promise<CardMain[]> = fetch('http://localhost:3001/cards')
    .then(res => res.json())
    .catch(err => (err.message).json())

  return await res.status(200).json(await data)
}
