import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import LiveProcessing from './pages/LiveProcessing';
import Analytics from './pages/Analytics';
import SecurityMonitor from './pages/SecurityMonitor';
import Configuration from './pages/Configuration';

function App() {
  const [currentPage, setCurrentPage] = useState('overview');

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <Overview />;
      case 'live-processing':
        return <LiveProcessing />;
      case 'analytics':
        return <Analytics />;
      case 'security':
        return <SecurityMonitor />;
      case 'configuration':
        return <Configuration />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1 ml-64">
        <div className="p-8">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;