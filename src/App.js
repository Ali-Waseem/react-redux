import { Fragment } from 'react/jsx-runtime';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';


function App() {
  const isLoggedIn = useSelector((state) => state.authReducer.isAuthenticated);
  return (
    <Fragment>
      <Header/>
      {!isLoggedIn && <Auth/>}
      {isLoggedIn && <UserProfile/>}
      <Counter/>
    </Fragment>
  );
}

export default App;
