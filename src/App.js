import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Users from './pages/Users';
import ErrorPage from './pages/ErrorPage';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <div className="App">
     <Navigation />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/pricing' element={<Pricing />}/>
      <Route path='/users' element={<Users />}/>
      <Route path='/*' element={<ErrorPage />}/>
      <Route path='/details/:id' element={<UserDetails />}/>

     </Routes>
    </div>
  );
}

export default App;
