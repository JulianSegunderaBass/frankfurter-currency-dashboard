import './CurrencyLabel.css';
import { useState } from 'react';
import { useCurrencyContext } from '../hooks/useCurrencyContext';

export default function CurrencyLabel({ shortLabel, fullLabel }) {
  const { dispatch, chosenCurrencies, currencyComparator, currencyListLimit } = useCurrencyContext();
  const [choiceValid, setChoiceValid] = useState(null);
  
  const handleCurrencyChoice = () => {
    // Prevent user from duplicating currency choice
    // Prevent user from including same currency comparator in the currency list
    if (!chosenCurrencies.includes(shortLabel) && currencyComparator !== shortLabel) {
      // Limit to 10 currencies at a time
      if (chosenCurrencies.length >= currencyListLimit) {
        dispatch({ type: 'SET_SITE_ERROR', payload: `Too many selections: please limit to ${currencyListLimit} currencies at a time.` });
        setChoiceValid(false);
        setTimeout(() => {
          setChoiceValid(null);
        }, 500);
      } else {
        dispatch({ type: 'ADD_CURRENCY_CHOICE', payload: shortLabel });
        setChoiceValid(true);
        setTimeout(() => {
          setChoiceValid(null);
        }, 500);
      }
    } else {
      setChoiceValid(false);
      setTimeout(() => {
        setChoiceValid(null);
      }, 500);
    }
  }

  return (
    <div className={`currency-label ${choiceValid === true && 'valid'} ${choiceValid === false && 'invalid'}`} onClick={handleCurrencyChoice}>
      <li >{shortLabel} - {fullLabel}</li>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
    </div>
  )
}