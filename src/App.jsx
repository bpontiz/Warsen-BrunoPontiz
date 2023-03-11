import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation.jsx';
import Login from './Components/Login/Login.jsx';

function App() {
  return (
    <Router>
      <Navigation />
      <Login />
      <Routes>
        <Route path='/' element={<Login />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
