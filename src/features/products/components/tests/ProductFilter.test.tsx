import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductFilter from '../ProductFilter';

describe('ProductFilter', () => {
  it('renderiza correctamente los títulos y selects', () => {
    render(<ProductFilter />);

    expect(screen.getByRole('heading', { name: /Filtros de productos/i })).toBeInTheDocument();

    // Labels
    expect(screen.getByLabelText(/Categoría/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ordenar por/i)).toBeInTheDocument();

    // Opciones por defecto
    expect(screen.getByDisplayValue('Todos')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Más recientes')).toBeInTheDocument();
  });

  it('permite cambiar la categoría', async () => {
    render(<ProductFilter />);
    const select = screen.getByLabelText(/Categoría/i);
    await userEvent.selectOptions(select, 'TV');
    expect((select as HTMLSelectElement).value).toBe('TV');
  });

  it('permite cambiar el orden', async () => {
    render(<ProductFilter />);
    const sortSelect = screen.getByLabelText(/Ordenar por/i);
    await userEvent.selectOptions(sortSelect, 'high-price');
    expect((sortSelect as HTMLSelectElement).value).toBe('high-price');
  });
});
