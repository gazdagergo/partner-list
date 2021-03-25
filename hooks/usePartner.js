import { useContext } from "react"
import { AppContext } from "../pages/_app"
import axios from 'axios'

const FETCH_PARTNERS = 'FETCH_PARTNERS'
const FETCH_PARTNERS__SUCCESS = 'FETCH_PARTNERS__SUCCESS'
const FETCH_PARTNERS__ERROR = 'FETCH_PARTNERS__ERROR'
const REMOVE_PARTNER = 'REMOVE_PARTNER'
const REMOVE_PARTNER__SUCCESS = 'REMOVE_PARTNER__SUCCESS'
const REMOVE_PARTNER__ERROR = 'REMOVE_PARTNER__ERROR'
const REMOVE_LINE = 'REMOVE_LINE'

const usePartner = () => {
  const { dispatch } = useContext(AppContext)
  
  const fetchPartners = async () => {
    dispatch({ type: FETCH_PARTNERS })
    try {
      const { data } = await axios({
        url: '/api/partners'
      })
      dispatch({ type: FETCH_PARTNERS__SUCCESS, payload: data })
    } catch({ response }){
      dispatch({ type: FETCH_PARTNERS__ERROR, payload: response }) 
    }
  }

  const removePartner = async partnerId => {
    dispatch({ type: REMOVE_PARTNER })
    try {
      const { data } = await axios({
        url: `/api/partners/${partnerId}`,
        method: 'DELETE'
      })
      dispatch({ type: REMOVE_PARTNER__SUCCESS, payload: data })
    } catch({ response }){
      dispatch({ type: REMOVE_PARTNER__ERROR, payload: response })
    }
  }

  const removeLine = partnerId => {
    dispatch({ type: REMOVE_LINE, payload: partnerId })
  }

  return {
    fetchPartners,
    removePartner,
    removeLine,
  }
}

export default usePartner

export const partnerReducer = (state, { type, payload }) => {
  switch(type){
    case REMOVE_PARTNER:
    case FETCH_PARTNERS: return {
      ...state,
      isLoading: true //TODO: handle isloading on UI
    }

    case FETCH_PARTNERS__SUCCESS: return {
      ...state,
      isLoading: false,
      partners: payload
    }

    case REMOVE_PARTNER__SUCCESS: return {
      ...state,
      isLoading: false,
      partners: state.partners.map(partner => (
        partner.id === payload.id ? 
        { ...partner, toRemove: true } :
        partner
      ))
    }

    case REMOVE_LINE: return {
      ...state,
      partners: state.partners.filter(({ id }) => id !== payload)
    }

    default: return state
  }
}

export const initialPartnerState = {
  partners: []
}
