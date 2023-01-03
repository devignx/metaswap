import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Swap from './pages/Swap';
import NotFound from './pages/NotFound';
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Swap/>} path="/swap"/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
