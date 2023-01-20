import songsData from '../data/songs'
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const SongLyrics = () => {
  const { lyricsId } = useParams();

  return (
    <>
      { songsData[lyricsId] ?
      <>
      <main className='page-content element-padding-hor element-padding-ver'>
        <h1>Lyrics</h1>
        <section className='section-element'>
          <h2><span className='song-lyrics__header__first-part'>{ songsData[lyricsId].title }</span><br/>
            <span className='song-lyrics__header__second-part'>by { songsData[lyricsId].artist }</span>
          </h2>
          <p className='element-padding-ver' style={{whiteSpace: "pre-wrap"}}>
            { songsData[lyricsId].lyrics }
          </p>
        </section>
      </main> 
      </> :
      <NotFound/> }
    </>
  )
};

export default SongLyrics;
