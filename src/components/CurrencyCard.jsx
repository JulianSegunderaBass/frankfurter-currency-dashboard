import './CurrencyCard.css';
import { useFetch } from '../hooks/useFetch';
import { useCurrencyContext } from '../hooks/useCurrencyContext';

export default function CurrencyCard({ currency }) {
  const { comparatorAmount, currencyComparator, removeCurrencyChoice } = useCurrencyContext();
  const { data, isPending, error } = useFetch(`https://api.frankfurter.app/latest?amount=${comparatorAmount}&from=${currencyComparator}&to=${currency}`);
  // console.log();
  return (
    <div className='currency-card'>
      <div className="currency-card-content">
        <span className='currency-card-label'>{currency}</span>
        {isPending && <span>Loading...</span>}
        {data && <span>{Object.values(data.rates)[0]}</span>}
      </div>
      <div className='currency-card-remove' onClick={() => removeCurrencyChoice(currency)}>x</div>
    </div>
  )
}