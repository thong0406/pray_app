import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Purpose from './components/Purpose/Purpose';
import Target from './components/Select_target/Target';
import HomeNatural from './components/Home_Natural/HomeNatural';
import BuddhismPage from './components/Home_Natural/HomeBuddhism';
import HomeChristianity from './components/Home_Natural/HomeChristianity'; 
import HomeHinduism from './components/Home_Natural/HomeHinduism'; 
import SettingsHIndu from './components/Setting/SettingsHIndu';
import SettingsNatural from './components/Setting/SettingsNatural';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/m" element={<Login />} />
        <Route path="/" element={<Purpose />} />
        <Route path="/targar/:id" element={<Target />} />
        <Route path="/HomeNatural/:religion" element={<HomeNatural />} />
        <Route path="/BuddhismPage/:religion" element={<BuddhismPage />} /> 
        <Route path="/HomeChristianity/:religion" element={<HomeChristianity />} /> 
        <Route path="/HomeHinduism/:religion" element={<HomeHinduism />} /> 

        <Route path="/HomeHinduism/SettingsHIndu" element={<SettingsHIndu />} />
        <Route path="/HomeNatural/SettingsNatural" element={<SettingsNatural />} />



      </Routes>
    </div>
  );
}

export default App;
