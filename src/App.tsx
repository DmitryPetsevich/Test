import React from 'react';
import './App.style.css';
import PageContent from './components/page-content/PageContent';
import NavigationPanel from './components/navigation-panel/NavigationPanel';

function App() {
  return (
    <div className="app">
      <NavigationPanel />
      <PageContent />
    </div>
  );
}

export default App;
