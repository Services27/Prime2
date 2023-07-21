import './App.css';
import Fundo from './components/fundo';
import Bolos from './components/Bolos';
import Doces from './components/Doces';

function App() {
  return (
    <div className='fundo'>
      <Fundo />
      <Bolos/>
      <Doces/>
    </div>
  )
}

export default App;
