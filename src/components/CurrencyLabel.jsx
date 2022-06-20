import './CurrencyLabel.css';
import { useCurrencyContext } from '../hooks/useCurrencyContext';

export default function CurrencyLabel({ shortLabel, fullLabel }) {
  const { dispatch } = useCurrencyContext();
  
  const handleCurrencyChoice = (shortLabel) => {
    dispatch({ type: 'ADD_CURRENCY_CHOICE', payload: shortLabel });
  }

  return (
    <div className="currency-label" onClick={handleCurrencyChoice(shortLabel)}>
      <li >{shortLabel} - {fullLabel}</li>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
    </div>
  )
}