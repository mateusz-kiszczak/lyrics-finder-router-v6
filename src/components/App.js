import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Artists from "./Artists";
import FooterContainer from "../containers/FooterContainer";
import SongLyrics from "./SongLyrics";
import Songs from './Songs';
import NotFound from './NotFound';
import AlbumSongs from "./AlbumSongs";
import AlbumsList from "./AlbumsList";
import SignInContainer from "../containers/SignInContainer";
import ProfileContainer from "../containers/ProfileContainer";

const App = (props) => {
  return (
    <div className="app-container">
      <Navigation 
        currentlyLoggedUser={ props.currentlyLoggedUser } 
        isLoggedIn={ props.isLoggedIn } 
      />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/artists'>
          <Route index element={ <Artists /> } />
          <Route path=':artistId' element={ <AlbumsList /> } />
          <Route path=':artistId/:albumId' element={ <AlbumSongs /> } />
        </Route>
        <Route path='/songs'>
          <Route index element={ <Songs /> } />
          <Route path=':lyricsId' element={ <SongLyrics /> } />
        </Route>
        <Route 
          path='/sign-in' 
          element={ 
            <SignInContainer 
              toggleLoggedIn={ props.toggleLoggedIn } 
              setLoggedUser={ props.setLoggedUser }
              currentlyLoggedUser={ props.currentlyLoggedUser }
            /> 
          } 
        />
        <Route 
          path='/profile/:userId' 
          element={ 
            <ProfileContainer 
              toggleLoggedIn={ props.toggleLoggedIn } 
              isLoggedIn={ props.isLoggedIn } 
              setLoggedUser={ props.setLoggedUser }
            /> 
          } 
        />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
      
      <FooterContainer />
    </div>
  );
};

export default App;
