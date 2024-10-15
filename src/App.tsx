import { Routes, Route } from 'react-router-dom';

import MainLayout from "./components/MainLayout";
import Intro from './pages/Intro';
import Home from './pages/Home';
import Test from './components/testFor/Test';
import MemoryGame from './components/memoryGame/MemoryGame';
import Support from './components/support/Support';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Intro />} /> 
        <Route path='/home' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/memoryGame' element={<MemoryGame />} />
        <Route path='/support' element={<Support />} />
      </Route>
    </Routes>
  );
}

export default App;