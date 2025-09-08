import './OwnerCard.scss';

const OwnerCard = ({
  icon: Icon,
  title = '',
  description = '',
  selected = false,
  onSelect,
}) => {
  return (
    <div
      className={`owner-card${selected ? ' owner-card--selected' : ''}`}
      onClick={onSelect}
      style={{ cursor: 'pointer' }}
    >
      <input
        className="owner-card__checkbox"
        type="checkbox"
        checked={selected}
        readOnly
      />
      <div className="owner-card__body">
        <div className="owner-card__header">
          <Icon />
          <b className="owner-card__title">{title}</b>
        </div>
        <p className="owner-card__description">{description}</p>
      </div>
    </div>
  );
};

export default OwnerCard;
