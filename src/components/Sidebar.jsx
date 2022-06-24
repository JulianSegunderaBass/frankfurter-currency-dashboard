import './Sidebar.css';
import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCurrencyContext } from '../hooks/useCurrencyContext';
import CurrencyLabel from './CurrencyLabel';

export default function Sidebar() {
  const { data, isPending } = useFetch('https://api.frankfurter.app/currencies');
  const { dispatch } = useCurrencyContext();

  useEffect(() => {
    if (data) {
      dispatch({ type: 'DATA_LOADING' });
      dispatch({ type: 'LOAD_CURRENCY_LABELS', payload: Object.keys(data) });
    }
  }, [data, dispatch]);
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="site-brand">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className='component-heading'>Frankfurter Currency Dashboard</p>
          <div className="sidebar-spacer"></div>
        </div>
        <div className="currency-labels">
          <ul>
            {data && Object.keys(data).map((label) => (
              <CurrencyLabel key={data[label]} shortLabel={label} fullLabel={data[label]} />
            ))}
          </ul>
          {isPending && <p>Loading data...</p>}
        </div>
      </div>
    </div>
  )
}