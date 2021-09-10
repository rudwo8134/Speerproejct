import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
