import { NavLink } from 'react-router-dom'

const Navigation = (props) => {
  return (
    <div className="main-navigation element-padding-hor element-padding-ver">
      <div className="main-navigation__logo">
        <p>lyrics finder</p>
      </div>
      <nav className="main-navigation__links">
        <ul>
          <li>
            <NavLink 
              className='link link--main-navigation'
              to='/'
            >home</NavLink>
          </li>
          <li>
            <NavLink 
              className='link link--main-navigation'
              to='/artists'
            >artists</NavLink>
          </li>
          <li>
            <NavLink 
              className='link link--main-navigation'
              to='/songs'
            >songs</NavLink>
          </li>
          <li>
            {
              props.isLoggedIn ? 
              <NavLink 
                className='link link--main-navigation'
                to={ `/profile/${props.currentlyLoggedUser}` }
              >profile</NavLink> :
              <NavLink 
                className='link link--main-navigation'
                to='/sign-in'
              >sign in</NavLink>
            }
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Navigation;
