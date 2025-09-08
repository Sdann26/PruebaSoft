import { create } from 'zustand';

export const steps = {
  PLANES: 'Planes y coberturas',
  RESUMEN: 'Resumen',
};

const useStepStore = create((set) => ({
  step: steps.PLANES,
  setStep: (newStep) => set({ step: newStep }),
}));

export default useStepStore;
