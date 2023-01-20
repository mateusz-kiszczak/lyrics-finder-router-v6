import { Link } from 'react-router-dom';
import artistsData from '../data/artists'
import InsideNavigation from './InsideNavigation';
import getListOfFirstCharacters from '../features/getListOfFirstCharacters';

const artistsDataKeysCollection = Object.keys(artistsData);
const artistsFirstCharacterCollection = getListOfFirstCharacters(artistsDataKeysCollection, artistsData);

const Artists = () => {
  return (
    <main className='page-content element-padding-hor element-padding-ver'>
      <h1>Artists</h1>
      <InsideNavigation firstCharacterCollection={ artistsFirstCharacterCollection }/>
      <hr/>
      <div className='grid-layout'>
      {
        artistsFirstCharacterCollection.map(item => {
          return (
            <section id={`character-${ item }`} key={`${item}-section`} className='section-element'>
              <h2>{ item }</h2>
              <ul>
                { 
                  // eslint-disable-next-line
                  artistsDataKeysCollection.map(secondItem => {
                    if (item === artistsData[secondItem].character) {
                      return (
                        <li key={`${secondItem}-artist`}>
                          <Link to={ `/artists/${ artistsData[secondItem].slug }` }>
                            { artistsData[secondItem].artist }
                          </Link>
                        </li>
                      )
                    }
                  }) }
              </ul>
            </section>
          );
        })
      }
      </div>
    </main>
  )
};

export default Artists;
