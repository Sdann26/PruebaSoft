import { create } from 'zustand';

const initUserData = {
  name: 'Rocío',
  lastName: 'Miranda Díaz',
  birthDay: '02-04-1990',
  dni: '',
  phone: '',
  plan: {
    name: '',
    price: 0,
  },
};

const useUserStore = create((set) => ({
  userData: initUserData,
  setPlan: (plan) =>
    set((state) => ({
      userData: { ...state.userData, plan },
    })),
  setUserData: (data) =>
    set((state) => ({
      userData: { ...state.userData, ...data },
    })),
}));

export default useUserStore;
