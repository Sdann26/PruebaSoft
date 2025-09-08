import { Outlet, useLocation } from 'react-router-dom';
import Stepper from '../components/Stepper';
import Header from './Header';
import './style.scss';

const Layout = () => {
  const location = useLocation();
  const steps = ['Planes y coberturas', 'Resumen'];
  const stepPaths = steps.map((step) =>
    step.toLowerCase().replace(/\s+/g, '-')
  );
  const currentPath = location.pathname.split('/').filter(Boolean).pop();
  const currentStep = stepPaths.indexOf(currentPath);

  return (
    <div className="layout">
      <Header />
      <Stepper currentStep={currentStep} steps={steps} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
