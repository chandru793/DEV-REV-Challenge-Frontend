import './App.css';
import { Route, Routes } from 'react-router-dom';

//components
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/signup' exact element={<SignUp/>}/>
      </Routes>
        {/* <button className='btn w-64 rounded-full'>buttton</button> */}
    </div>
  );
}

export default App;
