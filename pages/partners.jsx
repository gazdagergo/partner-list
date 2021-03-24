import PartnerListView from '../components/PartnerListView'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getStaticProps = async () => {
  const partners = await prisma.partner.findMany()
  return  {
    props: {
      partners
    }
  }
}

export default function partners({ partners }) {
  return (
    <PartnerListView partners={partners} />
  )
}
