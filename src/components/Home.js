import { Link } from 'react-router-dom'
import songsData from '../data/songs';
import albumsData from '../data/albums';
import shuffleArray from '../features/shuffleArray';

const songsDataKeysCollection = Object.keys(songsData);
const albumsDataKeysCollection = Object.keys(albumsData);

// Shuffle data Collections.
shuffleArray(songsDataKeysCollection);
shuffleArray(albumsDataKeysCollection);

// Sclice the shuffled data.
const selectedSongs = songsDataKeysCollection.slice(0, 5);
const selectedAlbums = albumsDataKeysCollection.slice(0, 5);

const Home = () => {
  return (
    <div className='page-content element-padding-hor element-padding-ver'>
      <header>
        <h1>lyrics finder</h1>
        <p></p>
      </header>
      <main>
        <section className='section-element'>
          <h2 className='home__header'>selected albums</h2>
          <ol>
            {
              selectedAlbums.map(item => {
                return (
                  <li key={`${item}-album`} className='home__selected-link'>
                    <Link to={`/artists/${albumsData[item]['artist-slug']}/${albumsData[item].slug}`}>
                      { `${albumsData[item].title}`} <span>(by {albumsData[item].artist})</span>
                    </Link>
                  </li>
                );
              })
            }
          </ol>
        </section>
        <section className='section-element'>
          <h2 className='home__header'>selected songs</h2>
          <ol>
            {
              selectedSongs.map(item => {
                return (
                  <li key={`${item}-song`} className='home__selected-link'>
                    <Link to={`/songs/${songsData[item].slug}`}>{ `${songsData[item].title}`} <span>(by {songsData[item].artist})</span></Link>
                  </li>
                );
              })
            }
          </ol>
        </section>
      </main>
    </div>
  )
};

export default Home;
