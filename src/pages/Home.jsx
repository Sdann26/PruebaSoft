import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { getUser } from '../services/user';
import useUserStore from '../store/useUserStore';
import ImageMobile from '../assets/mobileImage.png';
import ImageDesktop from '../assets/desktopImage.png';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Divider from '../components/Divider';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();
  const { setUserData } = useUserStore();

  return (
    <div className="home">
      <Header />
      <h1 className="sr-only">Formulario de ingreso</h1>
      <div className="home__container">
        <img className="desktop-image" src={ImageDesktop} aria-hidden="true" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="home__banner">
            <div>
              <span className="home__tag">Seguro Salud Flexible</span>
              <p className="main-title">Creado para ti y tu familia</p>
            </div>
            <img
              className="mobile-image"
              src={ImageMobile}
              aria-hidden="true"
            />
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
                phone: '',
                terms: false,
                terms2: false,
              }}
              validationSchema={Yup.object({
                dni: Yup.string()
                  .required('El DNI es obligatorio')
                  .matches(/^\d{8}$/, 'Debe tener 8 dígitos'),
                phone: Yup.string()
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
              onSubmit={async (values, { setTouched, validateForm }) => {
                const errors = await validateForm();
                if (Object.keys(errors).length > 0) {
                  setTouched({
                    dni: true,
                    phone: true,
                    terms: true,
                    terms2: true,
                  });
                  return;
                }
                const { dni, phone } = values;
                const user = await getUser();
                setUserData({ dni, phone, ...user });
                navigate('/planes-y-coberturas');
              }}
            >
              {() => (
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
                    <label htmlFor="phone">Celular</label>
                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      maxLength={9}
                      placeholder="Ingresa tu celular"
                      className="home__form-input"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="home__form-error"
                    />
                  </div>
                  <div className="home__form-checkbox">
                    <Field type="checkbox" id="terms" name="terms" />
                    <label htmlFor="terms">
                      Acepto la Política de Privacidad
                    </label>
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
                  <button className="home__form-button" type="submit">
                    Cotiza aquí
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
