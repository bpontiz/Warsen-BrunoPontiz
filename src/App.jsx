import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation.jsx';
// import Login from './Components/Login/Login.jsx';
// import Register from './Components/Register/Register.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <Router>
      <Navigation />
      <ItemListContainer />
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
