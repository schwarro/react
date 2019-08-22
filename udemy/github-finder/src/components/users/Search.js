import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  // static propTypes = {
  //   searchUsers: PropTypes.func.isRequired,
  //   clearUsers: PropTypes.func.isRequired,
  //   showClear: PropTypes.bool.isRequired,
  //   setAlert: PropTypes.func.isRequired
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    if(text === ''){
      setAlert('Please enter a user', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  }

  // render() {
    return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Seach Users..."
            value={text}
            onChange={onChange}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
        {githubContext.users.length > 0 && (
          <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
        )}
      </div>
    )
  // }
}

Search.propTypes = {
  // searchUsers: PropTypes.func.isRequired,
  // clearUsers: PropTypes.func.isRequired,
  // showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
