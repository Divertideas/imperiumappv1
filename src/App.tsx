import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { MenuScreen } from './ui/screens/MenuScreen';
import { SetupScreen } from './ui/screens/SetupScreen';
import { DashboardScreen } from './ui/screens/DashboardScreen';
import { EmpireScreen } from './ui/screens/EmpireScreen';
import { PlanetScreen } from './ui/screens/PlanetScreen';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MenuScreen />} />
        <Route path='/setup' element={<SetupScreen />} />
        <Route path='/dashboard' element={<DashboardScreen />} />
        <Route path='/empire/:empireId' element={<EmpireScreen />} />
        <Route path='/planet/:planetId' element={<PlanetScreen />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
}
