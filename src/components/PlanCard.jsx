import './PlanCard.scss';

const PlanCard = ({ name, price, description, icon: Icon, owner = '' }) => {
  const oldPrice = price;
  const newPrice =
    owner === 'Para alguien más' ? (price * 0.95).toFixed(2) : price;

  return (
    <div className="plan-card">
      <span
        className="plan-card__tag"
        style={name !== 'Plan en Casa y Clínica' ? { padding: 0 } : {}}
      >
        {name === 'Plan en Casa y Clínica' && 'Plan Recomendado'}
      </span>
      <div className="plan-card__header">
        <div className="plan-card__header-info">
          <span className="plan-card__title">{name}</span>
          <span className="plan-card__price-subtitle">Costo del plan</span>
          {owner === 'Para alguien más' && (
            <span className="plan-card__price-subtitle plan-card__price-subtitle--old">{`$${oldPrice} antes`}</span>
          )}
          <span className="plan-card__price">{`$${newPrice} al mes`}</span>
        </div>
        <Icon />
      </div>
      <ul className="plan-card__list">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className="plan-card__button">Seleccionar Plan</button>
    </div>
  );
};

export default PlanCard;
