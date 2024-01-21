import React from 'react';
import './App.style.css';
import PageContent from './components/page-content/PageContent';
import NavigationPanel from './components/navigation-panel/NavigationPanel';
import Delimiter from './components/delimeter/Delimeter';

function App() {
  return (
    <div className="app">
      <NavigationPanel />
      <Delimiter />
      <PageContent />
    </div>
  );
}

export default App;
