import { FC, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { auth } from './fireBase/fireStore'; 
import { onAuthStateChanged, signOut, User } from 'firebase/auth';

import MainLayout from './components/MainLayout';
import Intro from './pages/Intro';
import Courses from './components/courses/Courses';
import Home from './pages/Home';
import MyCourses from './components/myCourses/MyCourses';
import Test from './components/testFor/Test';
import AddCourse from './components/addCourse/AddCourse';
import ChatComponent from './components/chatMessages/Messages';
import MemoryGame from './components/memoryGame/MemoryGame';
import Support from './components/support/Support';


interface Course {
  id: number;
  title: string;
  image: string;
  level: string;
}

const App: FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [savedCourses, setSavedCourses] = useState<Course[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (!currentUser) {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate('/');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSaveCourse = (course: Course) => {
    if (!savedCourses.some((savedCourse) => savedCourse.id === course.id)) {
      setSavedCourses((prev) => [...prev, course]);
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout isAuthenticated={!!user} />}>
          <Route index element={<Intro />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/home" element={user ? <Home savedCourses={savedCourses} onSaveCourse={handleSaveCourse} /> : <Intro />} />
          <Route path="/mycourses" element={user ? <MyCourses savedCourses={savedCourses} /> : <Intro />} />
          <Route path="/test" element={user ? <Test /> : <Intro />} />
          <Route path="/addcourse" element={user ? <AddCourse /> : <Intro />} />
          <Route path="/chat" element={user ? <ChatComponent /> : <Intro />} />
          <Route path="/memoryGame" element={user ? <MemoryGame /> : <Intro />} />
          <Route path="/support" element={user ? <Support /> : <Intro />} />
        </Route>
      </Routes>

      {user && (
        <button onClick={handleLogout} style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
          Выйти
        </button>
      )}
    </>
  );
};

export default App;