const Footer = (props) => {
  return (
    <>
      <button
        className="button button--footer-left" 
        onClick={ () => props.handleOnClickGoBack() }>
        prev
      </button>
      <button 
        className="button button--footer-right"
        onClick={ () => props.handleOnClickGoForward() }>
        next
      </button>
      <div className="content-wrap--footer">
        <footer className="footer element-padding-hor">
          <div className="footer__buttons-container">
          </div>
          <div className="footer__copyrights">
            <p>© { props.currentYear } lyrics finder</p>
          </div>
        </footer>
      </div>
    </>
  )
};

export default Footer;
