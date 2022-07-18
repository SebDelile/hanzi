import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HanziTable } from './components/HanziTable';
import { ReadingTest } from './pages/ReadingTest';
import { WritingTest } from './pages/WritingTest';
import { Header } from './components/Header';

export function App() {
  return (
    <Router>
      <Header />
      <main className="app-container w-full py-4 mt-20">
        <Routes>
          <Route path="/" element={<HanziTable />} />
          <Route path="/writing-test" element={<WritingTest />} />
          <Route path="/reading-test" element={<ReadingTest />} />
        </Routes>
      </main>
    </Router>
  );
}
