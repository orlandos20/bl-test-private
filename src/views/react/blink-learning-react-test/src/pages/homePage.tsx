import { Link } from 'wouter';

const HomePage = () => {
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
};

export default HomePage;
