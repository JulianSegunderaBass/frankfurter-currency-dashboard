import './CurrencyCard.css';

export default function CurrencyCard({ currency }) {
  return (
    <div className='currency-card'>
      <p className='currency-card-label'>{currency}</p>
      <p>1.5468</p>
    </div>
  )
}