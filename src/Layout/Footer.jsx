import LogoDarkDesktop from '../assets/Icons/LogoDarkDesktop';
import LogoDarkMobile from '../assets/Icons/LogoDarkMobile';
import Divider from '../components/Divider';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-mobile">
          <LogoDarkMobile />
        </div>
        <div className="footer__logo-desktop">
          <LogoDarkDesktop />
        </div>
        <Divider style={{ borderColor: '#2B304E' }} />
        <small>© {year} RIMAC Seguros y Reaseguro</small>
      </div>
    </footer>
  );
};

export default Footer;
