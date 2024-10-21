import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { RootState } from '../../redux/store';

import './Sidebar.css';

const Sidebar: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const role = useSelector((state: RootState) => state.role.role);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h2 className='sidebar-h2'>{!isCollapsed && 'SkillSprint'}</h2>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <i className="sidebar-logo fa-brands fa-squarespace"></i>
        </button>
      </div>
      <nav className="sidebar-menu">
        <ul>
          <NavLink to="/home" className={({ isActive }) => (isActive ? 'sidebar-active' : 'menu-item')}>
            <i className="menu-icon fa-solid fa-border-all"></i>
            {!isCollapsed && 'Dashboard'}
          </NavLink>
          <NavLink to="/mycourses" className={({ isActive }) => (isActive ? 'sidebar-active' : 'menu-item')}>
            <i className="menu-icon fa-solid  fa-book"></i>
            {!isCollapsed && 'My Courses'}
          </NavLink>
          {
            role === "teacher" ?
          <NavLink to="/choose" className={({ isActive }) => (isActive ? 'sidebar-active' : 'menu-item')}>
            <i className="menu-icon fa-solid fa-file-circle-question"></i>
            {!isCollapsed && 'Take a Test'}
          </NavLink> :
                    <NavLink to="/test" className={({ isActive }) => (isActive ? 'sidebar-active' : 'menu-item')}>
                    <i className="menu-icon fa-solid fa-file-circle-question"></i>
                    {!isCollapsed && 'Take a Test'}
                  </NavLink> 
          }
          {
            role === "teacher" ? 
          <NavLink to="/addcourse" 
                   className={({ isActive }) => (isActive ? 'sidebar-active' : 'menu-item')}>
             <i className="menu-icon fa-solid fa-chalkboard-user"></i>
             {!isCollapsed && 'Add Course'}
          </NavLink> : ""
          }
          <NavLink to="/chat" className={({ isActive }) => (isActive ? 'sidebar-active' : 'menu-item')}>
            <i className="menu-icon fa-regular fa-comment"></i>
            {!isCollapsed && 'Messages'}
            {!isCollapsed && <span className="badge">8</span>}
          </NavLink>
          <NavLink to="/memoryGame" 
                   className={({ isActive }) => (isActive ? 'sidebar-active' : 'menu-item')}>
            <i className="menu-icon fa-solid fa-layer-group"></i>
            {!isCollapsed && 'Memory Game'}
          </NavLink>
          <NavLink to="/tetris" 
                   className={({ isActive }) => (isActive ? 'sidebar-active' : 'menu-item')}>
            <i className="menu-icon fa-solid fa-layer-group"></i>
            {!isCollapsed && 'Tetris Game'}
          </NavLink>


        </ul>
      </nav>
      <div className="sidebar-footer">
        <NavLink to="/support" className={({ isActive }) => (isActive ? 'sidebar-active' : 'sidebar-footer-item')}>
          <i className="sidebar-footer-icon fa-regular fa-circle-question"></i>
          {!isCollapsed && 'Support'}
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? 'sidebar-active' : 'sidebar-footer-item')}>
          <i className="sidebar-footer-icon fa-regular fa-circle-question"></i>
          {!isCollapsed && 'Settings'}
        </NavLink>

      </div>
    </aside>
  );
};

export default Sidebar;