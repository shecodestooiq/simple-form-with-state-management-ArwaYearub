import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayPage from './components/pages/DisplayPage';
import LoginPage from './components/pages/LoginPage';
import { UserProvider } from './components/context/Context';

function App() {
  return (
    <>
    <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/userinfo" element={<DisplayPage />}/>
      </Routes>
    </UserProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
