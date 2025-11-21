import { BrowserRouter } from 'react-router-dom';
import GuestRoutes from './GuestRoutes';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <GuestRoutes />
    </BrowserRouter>
  );
}
