import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import NavigationLogin from './Components/Navigation/NavigationLogin.jsx';
import RegisteredSuccessful from './Components/Login/RegisteredSuccessful.jsx';
import RegisterFailed from './Components/Register/RegisterFailed.jsx';
import LoginSuccessful from './Components/Navigation/LoginSuccessful.jsx';
import LoginFailed from './Components/Login/LoginFailed.jsx';
import RegisterPassFailed from './Components/Register/RegisterPassFailed.jsx';
import Cart from './Components/Cart/Cart.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' 
          element={<>
            <Navigation />
            <ItemListContainer />
          </>}
        />
        <Route path='/register' 
          element={<>
            <Navigation />
            <Register />
          </>} 
        />
        <Route path='/registered' 
          element={<>
            <NavigationLogin />
            <Login />
          </>} 
        />
        <Route path='/registered/successful'
          element={<>
            <NavigationLogin />
            <RegisteredSuccessful />
          </>}
        />
        <Route path='/registered/failed'
          element={<>
            <NavigationLogin />
            <RegisterFailed />
          </>}
        />
        <Route path='/registered/passFailed'
          element={<>
            <NavigationLogin />
            <RegisterPassFailed />
          </>}
        />
        <Route path='/logged'
          element={<>
            <LoginSuccessful />
            <ItemListContainer />
          </>}
        />
        <Route path='/logged/failed'
          element={<>
            <NavigationLogin />
            <LoginFailed />
          </>}
        />
        <Route path='/cart'
          element={<>
            <Navigation />
            <Cart />
          </>}
        />
      </Routes>
    </Router>
    
  );
}

export default App;
