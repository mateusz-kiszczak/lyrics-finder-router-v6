import { useState } from 'react';
import SignIn from "../components/SignIn";

const availibleProfiles = {
  user: 'mark',
  password: 'mark123'
};

const SignInContainer = (props) => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userPasswordInput, setUserPasswordInput] = useState('');
  
  const handleOnSubmit = (e) => {
    if (userNameInput === availibleProfiles.user && userPasswordInput === availibleProfiles.password) {
      props.toggleLoggedIn();
      props.setLoggedUser(availibleProfiles.user);
    }
    e.preventDefault();
  };

  const handleOnChangeUser = (e) => {
    setUserNameInput(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setUserPasswordInput(e.target.value);
  };

  return (
    <SignIn 
      availibleProfiles={ availibleProfiles }
      handleOnChangeUser={ handleOnChangeUser }
      handleOnChangePassword={ handleOnChangePassword }
      handleOnSubmit={ handleOnSubmit }
      userNameInput={ userNameInput }
      userPasswordInput={ userPasswordInput }
    />
  );
};

export default SignInContainer;
