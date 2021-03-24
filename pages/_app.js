import { useReducer, createContext } from 'react'
import reduceReducers from 'reduce-reducers';
import { partnerReducer, initialPartnerState } from '../hooks/usePartner';
import '../styles/globals.css'

const reducer = reduceReducers(partnerReducer)
const initialState = {
  ...initialPartnerState
}

export const AppContext = createContext()

function MyApp({ Component, pageProps }) {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
