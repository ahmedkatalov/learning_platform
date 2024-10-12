import { Routes, Route } from 'react-router-dom';

import MainLayout from "./components/MainLayout";
import Intro from './pages/Intro';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Intro />} /> 
      </Route>
    </Routes>
  );
}

export default App;