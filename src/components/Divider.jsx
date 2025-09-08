import './Divider.scss';

const Divider = ({ className, style }) => {
  return <hr className={`divider ${className}`} style={style} />;
};

export default Divider;
