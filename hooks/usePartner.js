import { useContext } from "react"
import { AppContext } from "../pages/_app"
import axios from 'axios'

const FETCH_PARTNERS = 'FETCH_PARTNERS'
const FETCH_PARTNERS__SUCCESS = 'FETCH_PARTNERS__SUCCESS'
const FETCH_PARTNERS__ERROR = 'FETCH_PARTNERS__ERROR'

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

  return {
    fetchPartners
  }
}

export default usePartner

export const partnerReducer = (state, { type, payload }) => {
  switch(type){
    case FETCH_PARTNERS: return {
      ...state,
      isLoading: true
    }

    case FETCH_PARTNERS__SUCCESS: return {
      ...state,
      isLoading: false,
      partners: payload
    }
  }
}

export const initialPartnerState = {
  partners: []
}
