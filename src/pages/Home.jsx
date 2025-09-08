import Header from '../Layout/Header';
import ImageMobile from '../assets/mobileImage.png';
import Divider from '../components/Divider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
        <Formik
          initialValues={{
            dni: '',
            celular: '',
            terms: false,
            terms2: false,
          }}
          validationSchema={Yup.object({
            dni: Yup.string()
              .required('El DNI es obligatorio')
              .matches(/^\d{8}$/, 'Debe tener 8 dígitos'),
            celular: Yup.string()
              .required('El celular es obligatorio')
              .matches(/^\d{9}$/, 'Debe tener 9 dígitos'),
            terms: Yup.boolean().oneOf(
              [true],
              'Debes aceptar la Política de Privacidad'
            ),
            terms2: Yup.boolean().oneOf(
              [true],
              'Debes aceptar la Política de Comunicaciones comerciales'
            ),
          })}
          onSubmit={(values) => {
            // Aquí puedes continuar el flujo
            alert('Formulario válido. Continuando...');
          }}
        >
          {({ isValid, dirty }) => (
            <Form className="home__form">
              <div className="home__form-group">
                <label htmlFor="dni">DNI</label>
                <Field
                  type="text"
                  id="dni"
                  name="dni"
                  maxLength={8}
                  placeholder="Ingresa tu DNI"
                  className="home__form-input"
                />
                <ErrorMessage
                  name="dni"
                  component="div"
                  className="home__form-error"
                />
              </div>
              <div className="home__form-group">
                <label htmlFor="celular">Celular</label>
                <Field
                  type="tel"
                  id="celular"
                  name="celular"
                  maxLength={9}
                  placeholder="Ingresa tu celular"
                  className="home__form-input"
                />
                <ErrorMessage
                  name="celular"
                  component="div"
                  className="home__form-error"
                />
              </div>
              <div className="home__form-checkbox">
                <Field type="checkbox" id="terms" name="terms" />
                <label htmlFor="terms">Acepto la Política de Privacidad</label>
              </div>
              <ErrorMessage
                name="terms"
                component="div"
                className="home__form-error"
              />
              <div className="home__form-checkbox">
                <Field type="checkbox" id="terms2" name="terms2" />
                <label htmlFor="terms2">
                  Acepto la Política de Comunicaciones comerciales
                </label>
              </div>
              <ErrorMessage
                name="terms2"
                component="div"
                className="home__form-error"
              />
              <a href="#">Aplican Términos y Condiciones</a>
              <button
                className="home__form-button"
                type="submit"
                disabled={!(isValid && dirty)}
              >
                Cotiza aquí
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Home;
