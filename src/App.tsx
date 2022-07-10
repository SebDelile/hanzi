import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HanziTable } from './components/HanziTable';
import { ReadingTest } from './pages/ReadingTest';
import { WritingTest } from './pages/WritingTest';
import { Header } from './components/Header';

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HanziTable />} />
        <Route path="/writing-test" element={<WritingTest />} />
        <Route path="/reading-test" element={<ReadingTest />} />
      </Routes>
    </Router>
  );
}
