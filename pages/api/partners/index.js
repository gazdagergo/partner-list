import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  if (req.method == 'GET') {
    const partners = await prisma.partner.findMany({
      include: {
        settlement: true,
      },
    })  
    res.status(200).json(partners)
  }
}
