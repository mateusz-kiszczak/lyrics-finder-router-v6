import songsData from '../data/songs'
import InsideNavigation from './InsideNavigation';
import { Link } from 'react-router-dom';
import getListOfFirstCharacters from '../features/getListOfFirstCharacters';

const songsDataKeysCollection = Object.keys(songsData);
const songsFirstCharacterCollection = getListOfFirstCharacters(songsDataKeysCollection, songsData);

const Songs = () => {
  return (
    <main className='page-content element-padding-hor element-padding-ver'>
      <h1>Songs</h1>
      <InsideNavigation firstCharacterCollection={ songsFirstCharacterCollection }/>
      <hr/>
      <div className='grid-layout'>
        {
          songsFirstCharacterCollection.map(item => {
            return (
              <section id={`character-${ item }`} key={`${item}-section`} className='section-element'>
                <h2>{ item }</h2>
                <ul>
                  { 
                  // eslint-disable-next-line
                  songsDataKeysCollection.map(secondItem => {
                    if (item === songsData[secondItem].character) {
                      return (
                        <li key={`${secondItem}-song`}>
                            <Link to={ `/songs/${ songsData[secondItem].slug }` }>
                              { songsData[secondItem].title }
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

export default Songs;
