import { useParams, Link } from 'react-router-dom';
import albumsData from '../data/albums'
import artistsData from '../data/artists'
import NotFound from './NotFound';

const AlbumsList = () => {
  const { artistId } = useParams();

  return (
    <>
      { artistsData[artistId] ?
      <main className='page-content element-padding-hor element-padding-ver'>
        <h1>{ artistsData[artistId].artist }</h1>
        {
          artistsData[artistId].albumsSlugs.map(item => {
            return (
              <section key={`${item}-artist`} className='section-element'>
                <Link className='albums-list__link' to={`/artists/${artistId}/${item}`}>
                  <span>{ albumsData[item].title }</span>
                </Link>
                <div className='albums-list__img-info-flex'>
                  <div className='albums-list__album-img element-padding-ver'>
                    <img 
                      alt={`${albumsData[item].title} - album cover`} 
                      src={ albumsData[item].frontCover }
                    ></img>
                  </div>
                  <div className='albums-list__album-info'>
                    <p>released year: <span>{ albumsData[item].released }</span></p>
                    <p>label: <span>{ albumsData[item].label }</span></p>
                  </div>
                </div>
              </section>
            )
          })
        }
      </main> :
      <NotFound/> }
    </>
  )
};

export default AlbumsList;
