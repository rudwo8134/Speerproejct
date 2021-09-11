import { Switch, Route} from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './pages/Home';
import Payment from './pages/Payment';
import Pricing from './pages/Pricing';

function App() {
  return (
    <>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/pricing">
              <Pricing />
            </Route>
            <Route exact path="/payment">
              <Payment/>
            </Route>
          </Switch>
        </Layout>
    </>
  );
}

export default App;
