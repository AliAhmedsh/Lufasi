import { Routes, Route } from 'react-router-dom';
import Home from '../components/guest/home/Home';

export default function GuestRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

