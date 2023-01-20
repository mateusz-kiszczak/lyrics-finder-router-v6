const SignIn = (props) => {
  return (
    <main className='page-content element-padding-hor element-padding-ver'>
      <h1>Sign In</h1>
      <form className="form" onSubmit={ (e) => props.handleOnSubmit(e) }>
        <div className="form__element-container">
          <label className="form__label" htmlFor='name'>user name</label>
          <input 
            onChange={ (e) => props.handleOnChangeUser(e) }
            className="form__input" 
            type='text' 
            value={ props.userNameInput } 
            name='name'>
          </input>
        </div>
        <div className="form__element-container">
          <label className="form__label" htmlFor='password'>password</label>
          <input 
            onChange={ (e) => props.handleOnChangePassword(e) }
            className="form__input" 
            type='password' 
            value={ props.userPasswordInput } 
            name='password'>
          </input>
        </div>
        <input className="form__button" type='submit' value='log in'>
        </input>
      </form>
      <div className="form-alert">
        <p>
          User Name: <span>{ props.availibleProfiles.user }</span><br></br>
          Password: <span>{ props.availibleProfiles.password }</span>
        </p>
      </div>
    </main> 
  );
};

export default SignIn;
