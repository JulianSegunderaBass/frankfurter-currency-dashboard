import './CurrencyComparator.css';
import { useState, useEffect } from 'react';
import { useCurrencyContext } from '../hooks/useCurrencyContext';

export default function CurrencyComparator() {
  const { setComparatorChoice, currencyLabels, chosenCurrencies } = useCurrencyContext();
  const [comparatorValue, setComparatorValue] = useState(1);
  const [selectedComparator, setSelectedComparator] = useState('AUD');

  useEffect(() => {
    if (comparatorValue < 1) {
      setComparatorValue(1);
    }
    let adjustedCurrencyList = chosenCurrencies.filter(currency => currency !== selectedComparator);
    setTimeout(() => {
      setComparatorChoice(selectedComparator, comparatorValue, adjustedCurrencyList);
    }, 1000);
  }, [selectedComparator, comparatorValue]);

  return (
    <div className='currency-comparator'>
      <div className="comparator-heading">Compare 
      <div className='comparator-inputs'>
        <input type="number" min="1" className='comparator-value' onChange={(e) => setComparatorValue(e.target.value)} value={comparatorValue} />
        <select className='comparator-select' onChange={(e) => setSelectedComparator(e.target.value)} value={selectedComparator}>
          {currencyLabels && currencyLabels.map((label) => (
            <option key={label} value={label}>{label}</option>
          ))}
        </select> 
      </div>
      to other currencies</div>
      <p className='tooltip'>Built with the <a href='https://www.frankfurter.app/' target='_blank'>Frankfurter currency API</a>. Select currencies from the list to compare.</p>
    </div>
  )
}