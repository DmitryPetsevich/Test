import './App.style.css';
import Loader from './components/loader/Loader';
import NavigationPanel from './components/navigation-panel/NavigationPanel';
import Delimiter from './components/delimeter/Delimeter';
import PageContent from './components/page-content/PageContent';
import useLoaderContext from './contexts/loader-context/useLoaderContext';

function App() {
  const { loading } = useLoaderContext();

  return (
    <div className="app">
      <Loader loading={loading} />
      <NavigationPanel />
      <Delimiter />
      <PageContent />
    </div>
  );
}

export default App;
