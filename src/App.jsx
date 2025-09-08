import { useState } from 'react';
import './index.scss';
import OwnerCard from './components/OwnerCard';
import IcProtection from './assets/Icons/IcProtection';
import IcAddUser from './assets/Icons/IcAddUser';

const App = () => {
  const [selected, setSelected] = useState('');

  return (
    <>
      <p>Rocío ¿Para quién deseas cotizar?</p>
      <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
      <div className="owner-card-container">
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
    </>
  );
};

export default App;
