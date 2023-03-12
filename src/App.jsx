import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';

function App() {
  return (
    <Router>
      <Navigation />
      <Register />
      <Routes>
        <Route path='/' element={<Register />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
