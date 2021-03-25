import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  if (req.method == 'GET') {

    const { partner_id } = req.query

    const partner = await prisma.partner.findFirst({ where: { id: +partner_id }})
    if (partner){
      res.status(200).json(partner)
    } else {
      res.status(404).json({ error: 'Partner not found' })
    }
  }

  if (req.method == 'DELETE') {
    const { partner_id } = req.query
    let partner
    try {
      partner = await prisma.partner.delete({ where: { id: +partner_id }})
      res.status(200).json(partner)
    } catch({ meta }){
      res.status(404).json({ error: meta?.cause })
    }
  }
}
