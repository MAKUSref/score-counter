import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Hello</div>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
