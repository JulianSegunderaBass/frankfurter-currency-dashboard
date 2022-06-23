import './App.css';
// Components
import Sidebar from './components/Sidebar';
import CurrencyComparator from './components/CurrencyComparator';
import CurrencyList from './components/CurrencyList';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <CurrencyComparator />
        <CurrencyList />
      </div>
    </div>
  );
}

export default App;