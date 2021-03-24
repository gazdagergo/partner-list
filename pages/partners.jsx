import PartnerListView from '../components/PartnerListView'
import { useContext, useEffect } from 'react'
import usePartner from '../hooks/usePartner'
import { AppContext } from './_app'

export default function partners() {

  const { fetchPartners } = usePartner()
  const { state } = useContext(AppContext)

  useEffect(fetchPartners, [])

  return (
    <PartnerListView partners={state.partners} />
  )
}
