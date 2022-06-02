import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/' element={<Navigate to='/signup' />} />
      </Routes>
    </div>
  );
}

export default App;
