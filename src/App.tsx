import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Intro from './pages/Intro';
import Home from './pages/Home';
import Test from './components/testFor/Test';
import MemoryGame from './components/memoryGame/MemoryGame';
import Support from './components/support/Support';
import ChatComponent from './components/chatMessages/Messages';
import { auth } from './fireBase/fireStore'; // Импортируем auth
import { onAuthStateChanged, signOut, User } from 'firebase/auth'; // Добавляем signOut для выхода
import AboutUs from './pages/AboutUs';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); // Состояние для хранения пользователя
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Загрузка завершена
      if (!currentUser) {
        navigate('/'); // Перенаправляем на главную, если пользователь не авторизован
      }
    });

    // Отписываемся от слушателя при размонтировании компонента
    return () => unsubscribe();
  }, [navigate]);

  // Функция для выхода из аккаунта
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate('/'); // Перенаправляем на главную после выхода
  };

  if (loading) {
    return <div>Loading...</div>; // Показываем загрузку, пока проверяется авторизация
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Intro />} />
          {/* Если пользователь авторизован, показываем Home, иначе показываем Intro */}
          <Route path="/home"  element={user ? <Home /> :  <Intro />}  />
          <Route path="/test" element={<Test />} />
          <Route path="/chat" element={ <ChatComponent/>} />
          <Route path="/memoryGame" element={<MemoryGame />} />
          <Route path="/support" element={<Support />} />
          <Route path='/aboutus' element={<AboutUs />}/>
        </Route>
      </Routes>
       
      {/* Кнопка для выхода из аккаунта, будет отображаться, если пользователь авторизован */}
      {user && (
        <button onClick={handleLogout} style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
          Выйти
        </button>
      )}
    </>
  );
};

export default App;
