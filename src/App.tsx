import { Route, Switch } from 'wouter';
import './App.css';
import HomePage from './pages/home/homePage';
import TestPage from './pages/testPage/testPage';
import TestResultsPage from './pages/testResultsPage';

import { TrueFalseExamContext } from './contexts/true-false-exam';
import { useTrueFalseExam } from './hooks/true-false-exam/use-true-false-exam';

function App() {
  return (
    <TrueFalseExamContext.Provider value={useTrueFalseExam()}>
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/test' component={TestPage} />
        <Route path='/test-results' component={TestResultsPage} />
        <Route>404, Not Found!</Route>
      </Switch>
    </TrueFalseExamContext.Provider>
  );
}

export default App;
