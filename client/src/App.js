import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/'
import NavBar from './componets/NavBar'
import Header from './components/Header'
import Footer from './components/Footer/'


function App() {
  return (
    <Router>
          <Header /> 
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
