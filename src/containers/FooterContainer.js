import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const FooterContainer = () => {
  // Get current year.
  const today = new Date();
  const currentYear = today.getFullYear();
  // Assign navigate variable.
  const navigate = useNavigate();

  const handleOnClickGoBack = () => {
    navigate(-1);
  };

  const handleOnClickGoForward = () => {
    navigate(1);
  };

  return (
    <Footer 
      currentYear={ currentYear }
      handleOnClickGoBack={ handleOnClickGoBack }
      handleOnClickGoForward={ handleOnClickGoForward }
    />
  );
};

export default FooterContainer;
