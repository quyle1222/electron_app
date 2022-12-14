import AuthPage from 'Container/Auth/auth';
import HomePage from 'Container/Home/home';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
