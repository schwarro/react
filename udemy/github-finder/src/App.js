import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import Users from './components/users/Users';
import User from './components/users/User';
// import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
// import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  // const [alert, setAlert] = useState(null);

  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null
  // };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //
  //   this.setState({ users: res.data, loading: false });
  // }

  //Search Github Users
  // const searchUsers = async text => {
  //   setLoading(true);
  //
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //
  //   // this.setState({ users: res.data.items, loading: false });
  //   setUsers(res.data.items);
  //   setLoading(false);
  // }

  // Get a single Githb User
  // const getUser = async username => {
  //   setLoading(true);
  //
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //
  //   setUser(res.data);
  //   setLoading(false);
  // }

  //Get Users Repos
  // const getUserRepos = async username => {
  //   setLoading(true);
  //
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //
  //   setRepos(res.data)
  //   setLoading(false);
  // }

  //Clear Users from State
  // const clearUsers = () => {
  //   setRepos([])
  //   setLoading(false );
  // };

  //Set Alert
  // const showAlert = (msg, type) => {
  //   setAlert({ msg, type });
  //   setTimeout(() => setAlert(null), 3500);
  // };


  return (
    <GithubState>
    <AlertState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User}/>
              <Route component ={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </AlertState>
    </GithubState>
  );
};

export default App;
