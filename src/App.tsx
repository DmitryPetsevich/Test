import Loader from './components/common/loader/Loader';
import NavigationPanel from './components/common/navigation-panel/NavigationPanel';
import Delimiter from './components/common/delimeter/Delimeter';
import PageContent from './components/common/page-content/PageContent';
import useLoaderContext from './contexts/loader-context/useLoaderContext';
import './App.style.css';

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
