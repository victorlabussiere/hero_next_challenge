import type { NextApiRequest, NextApiResponse } from 'next'
import { NavbarDBTexts } from '../../components/ui/Navbar/types/navbar.types'
import { MOCK_NAVBAR_TEXTS } from '../../utils/mock_helpers'

export default async function handler(req: NextApiRequest, res: NextApiResponse<NavbarDBTexts>) {

    const data: Promise<NavbarDBTexts> = fetch('http://localhost:3001/navTexts')
        .then(res => res.json())
        .catch(err => err.json())

    try {
        return res.status(200).json(await data)
    } catch (e) {
        console.error('Não foi possível receber os dados relacionados aos Cards')
        return res.status(200).json(MOCK_NAVBAR_TEXTS)
    }
}
