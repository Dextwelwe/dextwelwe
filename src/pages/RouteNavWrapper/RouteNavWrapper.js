import { Outlet, useLocation } from 'react-router';
import Navbar from '../../components/Navigation/Navbar/Navbar';

export default function RouteNavWrapper() {
  const { pathname } = useLocation();
  const hideHeader = pathname === '/';

  return (
    <>
      {!hideHeader && <Navbar />}
      <main>
        <Outlet />
      </main>
    </>
  );
}