import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>



        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
