import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HanziTable } from './components/HanziTable';
import { Header } from './components/Header';

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HanziTable />} />
      </Routes>
    </Router>
  );
}
