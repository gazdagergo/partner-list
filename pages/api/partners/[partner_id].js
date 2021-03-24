import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  if (req.method == 'GET') {

    const { partner_id } = req.query

    const partner = await prisma.partner.findFirst({ where: { id: +partner_id }})
    res.status(200).json(partner)
  }
}
