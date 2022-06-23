import { createContext, useReducer } from 'react';

export const CurrencyContext = createContext();

// Reducer Function
export const CurrencyReducer = (state, action) => {
  switch (action.type) {
    case 'DATA_LOADING':
      return { ...state, dataLoading: true }
    case 'LOAD_CURRENCY_LABELS':
      return { ...state, currencyLabels: action.payload, currencyComparator: action.payload[0], dataLoading: false }
    case 'SET_CURRENCY_COMPARATOR':
      return { ...state, currencyComparator: action.payload.comparator, comparatorAmount: action.payload.value, dataLoading: false }
    case 'ADD_CURRENCY_CHOICE':
      return { ...state, chosenCurrencies: state.chosenCurrencies.concat(action.payload), dataLoading: false }
    default:
      return state;
  }
}

export const CurrencyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CurrencyReducer, {
    currencyLabels: [],
    currencyComparator: null,
    comparatorAmount: 1,
    chosenCurrencies: [],
    dataLoading: false
  });

  // Dispatch functions
  // const setCurrencyLabels = (data) => {
  //   dispatch({ type: 'DATA_LOADING' });
  //   dispatch({ type: 'LOAD_CURRENCY_LABELS', payload: data });
  // }

  const setComparatorChoice = (comparator, value) => {
    dispatch({ type: 'DATA_LOADING' });
    dispatch({ type: 'SET_CURRENCY_COMPARATOR', payload: {comparator, value} });
  }

  const addCurrencyChoice = (data) => {
    dispatch({ type: 'DATA_LOADING' });
    dispatch({ type: 'ADD_CURRENCY_CHOICE', payload: data });
  }

  return (
    <CurrencyContext.Provider value={{...state, dispatch, setComparatorChoice, addCurrencyChoice }}>
      {children}
    </CurrencyContext.Provider>
  )
}