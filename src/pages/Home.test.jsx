import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';

vi.mock('../services/user', () => ({
  getUser: vi.fn().mockResolvedValue({ name: 'Test', lastName: 'User' }),
}));
vi.mock('../store/useUserStore', () => ({
  default: () => ({ setUserData: vi.fn() }),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

describe('Home Form', () => {
  it('should show validation errors when submitting empty form', async () => {
    render(<Home />);
    const cotizaBtns = screen.getAllByText(/Cotiza aquí/i);
    fireEvent.click(cotizaBtns[0]);
    expect(
      await screen.findByText(/El DNI es obligatorio/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/El celular es obligatorio/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Debes aceptar la Política de Privacidad/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /Debes aceptar la Política de Comunicaciones comerciales/i
      )
    ).toBeInTheDocument();
  });

  it('should show error for invalid DNI and phone', async () => {
    render(<Home />);
    // Si hay más de un input con el mismo placeholder, selecciona el primero
    const dniInputs = screen.getAllByPlaceholderText(/Ingresa tu DNI/i);
    fireEvent.change(dniInputs[0], { target: { value: '123' } });
    const phoneInputs = screen.getAllByPlaceholderText(/Ingresa tu celular/i);
    fireEvent.change(phoneInputs[0], { target: { value: '456' } });
    const cotizaBtns2 = screen.getAllByText(/Cotiza aquí/i);
    fireEvent.click(cotizaBtns2[0]);
    expect(
      await screen.findByText(/Debe tener 8 dígitos/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Debe tener 9 dígitos/i)
    ).toBeInTheDocument();
  });

  it('should submit when all fields are valid', async () => {
    render(<Home />);
    const dniInputs = screen.getAllByPlaceholderText(/Ingresa tu DNI/i);
    fireEvent.change(dniInputs[0], { target: { value: '12345678' } });
    const phoneInputs = screen.getAllByPlaceholderText(/Ingresa tu celular/i);
    fireEvent.change(phoneInputs[0], { target: { value: '987654321' } });
    fireEvent.click(screen.getByLabelText(/Acepto la Política de Privacidad/i));
    fireEvent.click(
      screen.getByLabelText(/Acepto la Política de Comunicaciones comerciales/i)
    );
    fireEvent.click(screen.getAllByText(/Cotiza aquí/i)[0]);
    await waitFor(() => {
      expect(
        screen.queryByText(/El DNI es obligatorio/i)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/El celular es obligatorio/i)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/Debe tener 8 dígitos/i)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/Debe tener 9 dígitos/i)
      ).not.toBeInTheDocument();
    });
  });
});
