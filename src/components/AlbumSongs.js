import { useParams, Link } from 'react-router-dom';
import albumsData from '../data/albums';
import artistsData from '../data/artists';
import NotFound from './NotFound';

const AlbumSongs = () => {
  const { albumId } = useParams();
  const { artistId } = useParams();

  return (
    <>
      {
        (albumsData[albumId] && artistsData[artistId]) ?
        <main className='page-content element-padding-hor element-padding-ver'>
          <h1>Album Songs</h1>
          <section className='section-element'>
            <h2 className='album-songs__header'>
              <span className='album-songs__header__first-part'>{`${albumsData[albumId].title}`}</span><br/>
              <span className='album-songs__header__second-part'>{`by ${albumsData[albumId].artist}`}</span>
            </h2>
            <div className='album-songs__img-info-flex element-padding-ver'>
            <img 
              className='album-songs__album-img' 
              alt={`${albumsData[albumId].title} - album cover`} 
              src={ albumsData[albumId].frontCover }
            ></img>
              <div className='album-songs__album-info'>
                <p>released year: <span>{ albumsData[albumId].released }</span></p>
                <p>label: <span>{ albumsData[albumId].label }</span></p>
              </div>
            </div>
              <section>
                <h3>tracklist</h3>
                <ol>
                  {
                    albumsData[albumId].trackList.map(item => {
                      if (item.availible) {
                        return (
                          <li key={ `${item.title}-song` } className='album-songs__tracklist__li'>
                            <Link to={`/songs/${ item.slug }`}>
                              { `${item.title} ` }
                            </Link>
                          </li>
                        );
                      } else {
                        return <li key={ `${item.title}-song` }>{ item.title }</li>
                      }
                    })
                  }
                </ol>
              </section>
          </section>
        </main> :
        <NotFound />
      }
    </>
  )
};

export default AlbumSongs;
