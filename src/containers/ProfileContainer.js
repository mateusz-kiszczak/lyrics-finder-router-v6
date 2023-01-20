import { useState, useEffect } from 'react';
import Profile from "../components/Profile";

const date = new Date();

const ProfileContainer = (props) => {
  // Get current time (hour).
  const [greetings, setGreetings] = useState('Hello');
  // Set appropriate greeting depends on the time.
  // eslint-disable-next-line
  useEffect(() => {
    const currentHour = date.getHours();

    if (currentHour >= 6 && currentHour < 12)   { setGreetings('Good Morning'); }
    if (currentHour >= 12 && currentHour < 20)  { setGreetings('Good Afternoon'); }
    if (currentHour >= 20)  { setGreetings('Good Evening'); }
    if (currentHour < 6)    { setGreetings('Hello'); }
  });

  // Handle on click "Log Out" button.
  const handleOnClick = () => {
    props.toggleLoggedIn();
    props.setLoggedUser('');
  };

  return (
    <Profile 
      greetings={ greetings }
      handleOnClick={ handleOnClick }
      isLoggedIn={ props.isLoggedIn } 
      toggleLoggedIn={ props.toggleLoggedIn } 
    />
  );
};

export default ProfileContainer;
