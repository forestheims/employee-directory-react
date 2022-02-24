import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AddEditProfile from './views/AddEditProfile/AddEditProfile';
import Auth from './views/Auth/Auth';
import Profile from './views/Profile/Profile';
import Home from './views/Home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/profile/:id/edit">
            <AddEditProfile isProfile />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/profile">
            <AddEditProfile />
          </Route>
          <Route path="/register">
            <Auth />
          </Route>
          <Route path="/login">
            <Auth isSignedUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
