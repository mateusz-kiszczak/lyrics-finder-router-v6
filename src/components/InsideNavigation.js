const characters = ['#','0-9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const InsideNavigation = (props) => {
  return (
    <nav className="internal-navigation">
      <ul>
        { characters.map(item => {
          return (
            <li key={`${item}-character`}>{
                props.firstCharacterCollection.includes(item) ?
                <a className="internal-navigation__active-link" href={`#character-${item}`}>{item}</a> :
                <span className="internal-navigation__disabled-link">{item}</span>
            }</li>
          )
        }) }
      </ul>
    </nav>
  )
};

export default InsideNavigation;
