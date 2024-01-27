import { useLocation } from 'wouter';
import Button from '../components/Button';

const HomePage = () => {
  const [, navigate] = useLocation();

  return (
    <div>
      <Button variant='success' onClick={() => navigate('/test')}>
        Realziar prueba
      </Button>
      <Button
        variant='success'
        disabled
        onClick={() => navigate('/test-results')}
      >
        Resultados test
      </Button>
    </div>
  );
};

export default HomePage;
