import './CurrencyList.css';
import CurrencyCard from './CurrencyCard';
import { useCurrencyContext } from '../hooks/useCurrencyContext';

export default function CurrencyList() {
  const { chosenCurrencies } = useCurrencyContext();
  return (
    <div className='currency-card-list'>
      {chosenCurrencies && chosenCurrencies.map((currency) => (
        <CurrencyCard key={currency} currency={currency} />
      ))}
    </div>
  )
}