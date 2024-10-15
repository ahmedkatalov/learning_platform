import CoursesSection from '../components/coursesSection/CoursesSection';
import Sidebar from '../components/sideBar/SideBar';
import Greeting from '../components/greeting/Greeting';

import './style.css';

function Home() {
    return (
        <div className='home-container'>
            <Sidebar />
            <Greeting />
            <CoursesSection />
        </div>
    )
}

export default Home;