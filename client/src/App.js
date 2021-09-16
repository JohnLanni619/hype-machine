import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/'
import NavBar from './components/NavBar'
import Footer from './components/Footer/'


function App() {
  return (
    <Router>
          <NavBar />
    <div className="app">

<Switch>
  <Route exact path="/" component={Home} />
</Switch>
<Footer />
    </div>
    </Router>
  );
}


export default App;
