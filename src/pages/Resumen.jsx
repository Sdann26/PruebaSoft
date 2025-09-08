import useUserStore from '../store/useUserStore';
import GlFamily from '../assets/Icons/GlFamily';
import Container from '../components/Container';
import OnBack from '../components/OnBack';
import Divider from '../components/Divider';
import './Resumen.scss';

const Resumen = () => {
  const { userData } = useUserStore();
  const fullName = `${userData?.name} ${userData?.lastName}`;

  return (
    <Container>
      <OnBack to="/planes-y-coberturas">Volver</OnBack>
      <h1 className="main-title main-title--left main-title--max-width-none">
        Resumen del Seguro
      </h1>
      <div className="resumen-card">
        <div>
          <span className="resumen-card__supText">Precios calculados para</span>
          <div className="resumen-card__user">
            <GlFamily />
            <span>{fullName}</span>
          </div>
        </div>
        <Divider />
        <div className="resumen-card__section">
          <span>Responsable de pago</span>
          <span>{`DNI: ${userData?.dni}`}</span>
          <span>{`Celular: ${userData?.phone}`}</span>
        </div>
        <div className="resumen-card__section">
          <span>Plan Elegido</span>
          <span>{userData?.plan?.name}</span>
          <span>{`Costo del plan: ${userData?.plan?.price} al mes`}</span>
        </div>
      </div>
    </Container>
  );
};

export default Resumen;
