import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Sidebar from '../components/sideBar/SideBar';

import './MainLayout.css';

interface MainLayoutProps {
  isAuthenticated: boolean;
}

const MainLayout: FC<MainLayoutProps> = ({ isAuthenticated }) => {
  return (
    <div className="main-layout">
      <Header/>

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