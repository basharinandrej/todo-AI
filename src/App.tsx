import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrashPage from './pages/TrashPage';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/trash" element={<TrashPage />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;
