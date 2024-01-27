import { Link } from 'wouter';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Link href='/test'>
        <a className='link'>Realizar prueba</a>
      </Link>
      <Link href='/test-results'>
        <a className='link'>Resultados de la prueba</a>
      </Link>
    </div>
  );
}

export default App;
