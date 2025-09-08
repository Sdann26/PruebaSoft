import './Stepper.scss';

const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <>
          <div
            key={index}
            className={`stepper__step ${currentStep === index ? 'stepper__step--active' : ''}`}
          >
            <div className="step-number">{index + 1}</div>
            <span className="step-label">{step}</span>
          </div>
          {index < steps.length - 1 && (
            <div className="stepper__separator">{'....'}</div>
          )}
        </>
      ))}
    </div>
  );
};

export default Stepper;
