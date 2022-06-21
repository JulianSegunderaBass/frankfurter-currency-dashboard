import { createContext, useReducer } from 'react';

export const CurrencyContext = createContext();

// Reducer Function
export const CurrencyReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CURRENCY_LABELS':
      return { ...state, currencyLabels: action.payload }
    case 'ADD_CURRENCY_CHOICE':
      return { ...state, chosenCurrencies: state.chosenCurrencies.concat(action.payload) }
    default:
      return state;
  }
}

export const CurrencyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CurrencyReducer, {
    currencyLabels: [],
    currencyComparator: null,
    comparatorAmount: null,
    chosenCurrencies: []
  });

  return (
    <CurrencyContext.Provider value={{...state, dispatch }}>
      {children}
    </CurrencyContext.Provider>
  )
}