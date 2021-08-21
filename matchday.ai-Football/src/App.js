import './style.js';
import MyCollection from './container/MyCollection/MyCollection'
import { Wrapper } from './style.js';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FootBallAdminPanel from './container/FootBallAdminPanel/FootBallAdminPanel.js';

function App() {
  return (
    <Router>
        <Switch>
              <Route exact path="/" component={FootBallAdminPanel} />
      <Wrapper>
              <Route path="/home" component={MyCollection} />
      </Wrapper>
        </Switch>
    </Router>
  );
}

export default App;
