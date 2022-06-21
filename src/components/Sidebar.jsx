import './Sidebar.css';
import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCurrencyContext } from '../hooks/useCurrencyContext';
import CurrencyLabel from './CurrencyLabel';

export default function Sidebar() {
  const { data, isPending, error } = useFetch('https://api.frankfurter.app/currencies');
  const { dispatch } = useCurrencyContext();

  useEffect(() => {
    if (data) {
      dispatch({ type: 'LOAD_CURRENCY_LABELS', payload: Object.keys(data) });
    }
  }, [data, dispatch]);
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="site-brand">
          <p className='component-heading'>Frankfurter Currency Dashboard</p>
        </div>
        <div className="sidebar-spacer"></div>
        <div className="currency-labels">
          <ul>
            {data && Object.keys(data).map((label) => (
              <CurrencyLabel key={data[label]} shortLabel={label} fullLabel={data[label]} />
            ))}
          </ul>
          {isPending && <p>Loading data...</p>}
          {error && <p className='error'>{error}</p>}
        </div>
      </div>
    </div>
  )
}