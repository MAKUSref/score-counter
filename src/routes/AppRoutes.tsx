import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainDashboard from '../components/MainDashboard/MainDashboard';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainDashboard />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
