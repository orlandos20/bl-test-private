import { useContext } from 'react';
import { useLocation } from 'wouter';
import Button from '../components/Button';
import { TrueFalseExamContext } from '../contexts/true-false-exam';

const HomePage = () => {
  const [, navigate] = useLocation();
  const { examIsCompleted } = useContext(TrueFalseExamContext);

  return (
    <div>
      <Button
        variant='success'
        disabled={examIsCompleted}
        onClick={() => navigate('/test')}
      >
        Realizar prueba
      </Button>
      <Button
        variant='success'
        disabled={!examIsCompleted}
        onClick={() => navigate('/test-results')}
      >
        Resultados test
      </Button>
    </div>
  );
};

export default HomePage;
