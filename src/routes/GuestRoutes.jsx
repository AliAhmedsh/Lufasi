import { Routes, Route } from 'react-router-dom';
import Home from '../pages/guest/Home';

export default function GuestRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

