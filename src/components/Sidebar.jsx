import './Sidebar.css';
import { useFetch } from '../hooks/useFetch';

export default function Sidebar() {
  const { data, isPending, error } = useFetch('https://api.frankfurter.app/currencies');
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="site-brand">
          <p>Frankfurter Currency Dashboard</p>
        </div>
        <div className="sidebar-spacer"></div>
        <div className="currency-options">
          <ul>
            {data && Object.keys(data).map((currency) => (
              <div className="currency-option">
                <li key={currency}>{currency} - {data[currency]}</li>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              </div>
            ))}
          </ul>
          {isPending && <p>Loading data...</p>}
          {error && <p className='error'>{error}</p>}
        </div>
      </div>
    </div>
  )
}