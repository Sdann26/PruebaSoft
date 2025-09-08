import { useState, useEffect } from 'react';

import { getPlans } from '../services/plans';
import userStore from '../store/userStore';
import Container from '../components/Container';
import OwnerCard from '../components/OwnerCard';
import PlanCard from '../components/PlanCard';

import IcProtection from '../assets/Icons/IcProtection';
import IcAddUser from '../assets/Icons/IcAddUser';
import IcHospital from '../assets/Icons/IcHospital';
import IcHome from '../assets/Icons/IcHome';

const PlanesYCoberturas = () => {
  const { userData } = userStore();
  const [selected, setSelected] = useState('');
  const [plans, setPlans] = useState([]);

  const getAge = (dateStr) => {
    const [day, month, year] = dateStr.split('-').map(Number);

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    if (
      currentMonth < month - 1 ||
      (currentMonth === month - 1 && currentDay < day)
    ) {
      age--;
    }

    return age;
  };

  useEffect(() => {
    getPlans()
      .then((plans) => {
        const userAge = getAge(userData.birthDay);

        const filteredPlans = plans.filter((plan) => plan.age >= userAge);
        setPlans(filteredPlans);
      })
      .catch((err) => console.error('Error al obtener los planes:', err));
  }, []);

  return (
    <Container>
      <h1 className="sr-only">Planes y Coberturas</h1>
      <div style={{ marginBottom: '32px' }}>
        <p className="main-title">
          {userData?.name} ¿Para quién deseas cotizar?
        </p>
        <p className="main-description">
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
      </div>
      <div className="owner-card-container" style={{ marginBottom: '20px' }}>
        <OwnerCard
          icon={IcProtection}
          title="Para mí"
          description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
          selected={selected === 'Para mí'}
          onSelect={() => setSelected('Para mí')}
        />
        <OwnerCard
          icon={IcAddUser}
          title="Para alguien más"
          description="Realiza una cotización para uno de tus familiares o cualquier persona."
          selected={selected === 'Para alguien más'}
          onSelect={() => setSelected('Para alguien más')}
        />
      </div>
      {Boolean(selected) && (
        <div className="plans-container">
          {plans.map(({ name, price, description }) => (
            <PlanCard
              key={name}
              name={name}
              price={price}
              description={description}
              icon={name === 'Plan en Casa y Clínica' ? IcHospital : IcHome}
              owner={selected}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default PlanesYCoberturas;
