import { Outlet, useLocation } from 'react-router';
import Navbar from '../../components/Navigation/Navbar/Navbar';

export default function RouteNavWrapper() {
  const { pathname } = useLocation();
  const hideHeader = pathname === '/';

  return (
      <main>
      {!hideHeader && <Navbar />}
        <Outlet />
      </main>
  );
}