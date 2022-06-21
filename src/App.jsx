import './App.css';
// Components
import Sidebar from './components/Sidebar';
import CurrencyComparator from './components/CurrencyComparator';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <CurrencyComparator />
      </div>
    </div>
  );
}

export default App;