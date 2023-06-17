
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';

const App = () => {

  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/Home" component={HomePage}/>
      </Switch>
      </BrowserRouter>
  );
};

export default App;
