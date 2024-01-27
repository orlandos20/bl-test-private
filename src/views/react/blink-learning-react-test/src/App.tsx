import { Route, Switch } from 'wouter';
import './App.css';
import HomePage from './pages/homePage';
import TestPage from './pages/testPage';
import TestResultsPage from './pages/testResultsPage';

function App() {
  return (
    <Switch>
      <Route path='/' component={HomePage} />
      <Route path='/test' component={TestPage} />
      <Route path='/test-results' component={TestResultsPage} />
      <Route>404, Not Found!</Route>
    </Switch>
  );
}

export default App;
