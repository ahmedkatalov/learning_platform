import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Sidebar from '../components/sideBar/SideBar';

import './MainLayout.css';

interface MainLayoutProps {
  isAuthenticated: boolean;
  users: any;
  onLogout: () => void;
}

const MainLayout: FC<MainLayoutProps> = ({ isAuthenticated, users, onLogout }) => {
  const location = useLocation();

  const isAddCourseActive = location.pathname === '/addcourse';

  return (
    <div className="main-layout" style={{ backgroundColor: isAddCourseActive ? '#ededf7' : 'initial' }}>
      <Header users={users} onLogout={onLogout} />

        {isAuthenticated && <Sidebar /> ?
          <div className="layout-body">
            <Sidebar/>
            <div className="main-content">
              <Outlet /> 
            </div>
          </div> :
          <Outlet />
        }

      <Footer/>
    </div>
  );
};

export default MainLayout;