import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';

import NavBar from './components/NavBar';
import Footer from './components/Footer/';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import SingleCountdown from './pages/SingleCountdown';
import NoMatch from './pages/NoMatch';
import Contact from './pages/Contact'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile/:username?" component={Profile} />
            <Route exact path="/countdown/:id" component={SingleCountdown} />
            <Route exact path="/contact" component={Contact} />

            <Route component={NoMatch}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;
