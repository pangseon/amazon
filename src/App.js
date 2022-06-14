import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{},dispatch]=useStateValue();




  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser 

      
      
      })

      }
      else{
        dispatch({
          type:'SET_USER',
          user:null

        })
      }
    })
  },[])

  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/login'>

            <Login/>
          </Route>
          
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
