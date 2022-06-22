import { Provider } from 'react-redux';
import RepoList from './components/RepoList';
import { store } from './state';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Search for a package</h1>
        <RepoList />
      </div>
    </Provider>
  );
};

export default App;
