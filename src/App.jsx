import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const handleScrollToIssues = () => {
    const element = document.getElementById('system-issues-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Dashboard onReportClick={handleScrollToIssues} />
    </div>
  );
}

export default App;
