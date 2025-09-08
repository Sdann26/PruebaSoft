import { useState, useEffect } from 'react';
import './index.scss';

import OwnerCard from './components/OwnerCard';
import PlanCard from './components/PlanCard';
import IcProtection from './assets/Icons/IcProtection';
import IcAddUser from './assets/Icons/IcAddUser';
import IcHospital from './assets/Icons/IcHospital';
import IcHome from './assets/Icons/IcHome';

const App = () => {
  const [selected, setSelected] = useState('');
  const [plans, setPlans] = useState([]);
  const user = {
    name: 'Rocío',
    lastName: 'Miranda Díaz',
    birthDay: '02-04-1990',
  };

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
    fetch(`${import.meta.env.VITE_API_URL}plans.json`)
      .then((res) => res.json())
      .then((data) => {
        const plans = data.list;
        const userAge = getAge(user.birthDay);

        const filteredPlans = plans.filter((plan) => plan.age >= userAge);
        setPlans(filteredPlans);
      })
      .catch((err) => console.error('Error al obtener los planes:', err));
  }, []);

  return (
    <main>
      <p>Rocío ¿Para quién deseas cotizar?</p>
      <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
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
    </main>
  );
};

export default App;
