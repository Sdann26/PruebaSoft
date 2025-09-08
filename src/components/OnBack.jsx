import { Link } from 'react-router-dom';

const OnBack = ({ to = '/', children }) => (
  <Link
    to={to}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '16px',
      textDecoration: 'none',
      color: '#4F4FFF',
      fontWeight: 600,
    }}
  >
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="11" stroke="#4F4FFF" strokeWidth="2" />
        <path
          d="M13.5 8L9.5 12L13.5 16"
          stroke="#4F4FFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    {children || 'Volver'}
  </Link>
);

export default OnBack;
