
import './App.css';
import SearchLocation from './Views/SearchLocation/searchLocation'
import Homepage from './Views/homepage.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Solution from './Views/Solution/Solution'

function App() {
  return (
    <div >
      <Router>
        <Switch>

        <Route path={'/solution'} component={Solution} ></Route>
        <Route path={'/search'} component={SearchLocation}></Route>
        <Route path={'/'} component={Homepage}>

        </Route>


        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
