import Header from '../Layout/Header';
import ImageMobile from '../assets/mobileImage.png';
import Divider from '../components/Divider';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <h1 className="sr-only">Formulario de ingreso</h1>
      <div className="home__banner">
        <div>
          <span className="home__tag">Seguro Salud Flexible</span>
          <p className="main-title">Creado para ti y tu familia</p>
        </div>
        <img className="mobile-image" src={ImageMobile} aria-hidden="true" />
      </div>
      <Divider className="home__divider" />
      <div className="home__content">
        <p className="home__description">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría, 100% online.
        </p>
        <form className="home__form">
          <div className="home__form-group">
            <label htmlFor="dni">DNI</label>
            <input
              type="text"
              id="dni"
              name="dni"
              maxLength={8}
              placeholder="Ingresa tu DNI"
              className="home__form-input"
            />
          </div>
          <div className="home__form-group">
            <label htmlFor="celular">Celular</label>
            <input
              type="tel"
              id="celular"
              name="celular"
              maxLength={9}
              placeholder="Ingresa tu celular"
              className="home__form-input"
            />
          </div>
          <div className="home__form-checkbox">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Acepto la Política de Privacidad</label>
          </div>
          <div className="home__form-checkbox">
            <input type="checkbox" id="terms2" />
            <label htmlFor="terms2">
              Acepto la Política de Comunicaciones comerciales
            </label>
          </div>
          <a href="#">Aplican Términos y Condiciones</a>
        </form>
        <button className="home__form-button">Cotiza aquí</button>
      </div>
    </div>
  );
};

export default Home;
