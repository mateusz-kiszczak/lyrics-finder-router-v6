import { useParams } from 'react-router-dom';
import SignInContainer from '../containers/SignInContainer';
import avatar from '../img/avatar/mark_avatar.jpg';

const availibleProfiles = {
  user: 'mark',
  password: 'mark123'
};

const Profile = (props) => {
  const { userId } = useParams();

  return (
    (availibleProfiles.user === userId) && props.isLoggedIn ?
    <main className='page-content element-padding-hor element-padding-ver'>
      <h1>Profile</h1>
      <section className='section-element'>
        <h2 className='profile__greetings-header'>
          { props.greetings } <span className='profile__greetings-header-user-name'>{ userId }</span>
        </h2>
        <img 
          className='profile__user-avatar' 
          src={ avatar } 
          alt='user avatar'
        ></img>
        <section className='element-padding-ver'>
          <h2 className='profile__favourites__header'>favourites</h2>
          <ul className='profile__favourites__list'>
            <li>some link to favourite song's lyrics</li>
            <li>some link to favourite song's lyrics</li>
            <li>some link to favourite song's lyrics</li>
            <li>some link to favourite song's lyrics</li>
            <li>some link to favourite song's lyrics</li>
          </ul>
        </section>
        <button 
        className='form__button'
          onClick={ () => props.handleOnClick() }
        >log out</button>
      </section>
    </main> 
    :
    <SignInContainer toggleLoggedIn={ props.toggleLoggedIn }/>
  );
};

export default Profile;
