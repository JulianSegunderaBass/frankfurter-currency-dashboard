import './CurrencyComparator.css';
import { useState, useEffect } from 'react';
import { useCurrencyContext } from '../hooks/useCurrencyContext';

export default function CurrencyComparator() {
  const { setComparatorChoice, currencyLabels, currencyComparator, comparatorAmount, dataLoading } = useCurrencyContext();
  const [comparatorValue, setComparatorValue] = useState(1);
  const [selectedComparator, setSelectedComparator] = useState('AUD');

  useEffect(() => {
    setTimeout(() => {
      setComparatorChoice(selectedComparator, comparatorValue);
    }, 1000);
  }, [selectedComparator, comparatorValue]);

  return (
    <div>
      <p>{currencyComparator} : {comparatorAmount}</p>
      <p className="comparator-heading">Compare 
      <input type="number" className='comparator-value' onChange={(e) => setComparatorValue(e.target.value)} value={comparatorValue} />
      <select className='comparator-select' onChange={(e) => setSelectedComparator(e.target.value)} value={selectedComparator}>
        {currencyLabels && currencyLabels.map((label) => (
          <option key={label} value={label}>{label}</option>
        ))}
      </select> 
      to other currencies</p>
      <p className='tooltip'>Select currencies from the list to compare.</p>
    </div>
  )
}