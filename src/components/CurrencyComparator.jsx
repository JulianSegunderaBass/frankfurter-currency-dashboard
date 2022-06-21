import './CurrencyComparator.css';
import { useState } from 'react';
import { useCurrencyContext } from '../hooks/useCurrencyContext';

export default function CurrencyComparator() {
  const { currencyLabels } = useCurrencyContext();
  const [comparatorValue, setComparatorValue] = useState(1);
  const [selectedComparator, setSelectedComparator] = useState('');

  const handleValueChange = (value) => {
    setComparatorValue(value);
  }

  const handleComparatorChange = (value) => {
    setSelectedComparator(value);
  }

  return (
    <div>
      <p className="comparator-heading">Compare 
      <input type="number" className='comparator-value' onChange={(e) => handleValueChange(e.target.value)} value={comparatorValue} />
      <select className='comparator-select' onChange={(e) => handleComparatorChange(e.target.value)} value={selectedComparator}>
        <option value=''>Currency</option>
        {currencyLabels && currencyLabels.map((label) => (
          <option key={label} value={label}>{label}</option>
        ))}
      </select> 
      to other currencies</p>
    </div>
  )
}