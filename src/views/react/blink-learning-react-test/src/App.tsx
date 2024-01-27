import { Route, Switch } from 'wouter';
import './App.css';
import HomePage from './pages/homePage';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Switch>
      <Route path='/' component={HomePage} />
      {/* <Route path='/test' component={HomePage} />
      <Route path='/test-results' component={HomePage} /> */}
      <Route>404, Not Found!</Route>
    </Switch>
  );
}

export default App;
