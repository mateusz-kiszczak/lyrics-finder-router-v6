import App from '../components/App';
import { useLocation, useNavigate } from 'react-router-dom'
import { useLayoutEffect, useEffect, useState } from 'react'

// Fixed the issue with page not opening at the top content.
const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

const AppContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Is user looged in.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoggedIn = () => {
    setIsLoggedIn( isLoggedIn ? false : true );
  };
  
  // Which user is logged in.
  const [currentlyLoggedUser, setCurrentlyLoggedUser] = useState('');
  // After successful logging IN, navigate to user profile page.
  useEffect(() => {
    if (currentlyLoggedUser) {
      navigate(`/profile/${currentlyLoggedUser}`);
    }
  // eslint-disable-next-line
  }, [currentlyLoggedUser]);
  
  const setLoggedUser = str => {
    setCurrentlyLoggedUser(str);
  };
  
  // After successful logging OUT, navigate to logging page.
  useEffect(() => {
    if (!isLoggedIn && location.pathname === `/profile/${currentlyLoggedUser}`) {
      navigate('/sign-in');
    }
  // eslint-disable-next-line
  }, [isLoggedIn]);

  return (
    <Wrapper>
      <App 
        currentlyLoggedUser={ currentlyLoggedUser }
        isLoggedIn={ isLoggedIn } 
        setLoggedUser={ setLoggedUser }
        toggleLoggedIn={ toggleLoggedIn }  
      />
    </Wrapper>
  );
};

export default AppContainer;
