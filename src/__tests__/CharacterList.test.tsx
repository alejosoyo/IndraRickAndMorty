import { render, screen, waitFor } from '@testing-library/react';
import {CharacterList} from '../components/CharacterList';
import useCharacters from '../hooks/useCharacters';
import '@testing-library/jest-dom';

jest.mock('../hooks/useCharacters');

const mockUseCharacters = useCharacters as jest.MockedFunction<typeof useCharacters>;

describe('CharacterList', () => {

  test('debería mostrar "Loading..." mientras se cargan los datos', () => {
    mockUseCharacters.mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });

    render(<CharacterList />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('debería mostrar un mensaje de error si hay un error', () => {
    mockUseCharacters.mockReturnValue({
      data: [],
      loading: false,
      error: 'Error fetching data',
    });

    render(<CharacterList />);

    expect(screen.getByText(/Error fetching data/i)).toBeInTheDocument();
  });

  test('debería mostrar una lista de personajes cuando se cargan correctamente', async () => {
    const mockData = [
      { id: 1, name: 'Rick Sanchez', species: 'Human', image: 'rick_image_url' },
      { id: 2, name: 'Morty Smith', species: 'Human', image: 'morty_image_url' },
    ];

    mockUseCharacters.mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    render(<CharacterList />);

    await waitFor(() => {
      expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
      expect(screen.getByText(/Morty Smith/i)).toBeInTheDocument();
    });
  });
});