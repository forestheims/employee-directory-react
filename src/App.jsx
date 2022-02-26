import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AddEditProfile from './views/AddEditProfile/AddEditProfile';
import Auth from './views/Auth/Auth';
import Profile from './views/Profile/Profile';
import Home from './views/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <PrivateRoute path="/profile/edit">
            <AddEditProfile isProfile />
          </PrivateRoute>
          <PrivateRoute path="/profile/add">
            <AddEditProfile />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
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
