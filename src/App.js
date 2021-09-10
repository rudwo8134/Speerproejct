import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/pricing">
              <Pricing />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
