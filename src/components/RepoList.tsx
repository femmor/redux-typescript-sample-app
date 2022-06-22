import { FC, FormEvent, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Spinner from './Spinner';

const RepoList: FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    state => state.repositories
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
    setTerm('');
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for an npm package"
          className="search-input form-control"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </form>
      {error && <p>{error}</p>}
      {loading && <Spinner />}
      {!error && !loading && data && (
        <ul className="package-list">
          {data.map((repo, index) => (
            <li key={index} className="package">
              {index + 1}. {repo}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default RepoList;
