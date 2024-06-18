import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Home } from '../Home/Home';
import { ThemeProvider } from 'styled-components/native';
import mockTheme from '../../../__mocks__/themeProvider';
import { currenciesData, userData } from '../../../__mocks__/data';
import { mockNavigation } from '../../../__mocks__/navigation';


const mockData = { data: currenciesData };
const mockUserData = { data: userData };
jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: () => mockData,
}));

jest.mock('../../hooks/useUser', () => ({
  useUser: jest.fn(() => ({
    clearUser: jest.fn(),
    user: mockUserData,
  })),
}));

jest.mock('../../hooks/useFavorites', () => ({
  useFavorites: () => ({
    addFavorite: jest.fn(),
    isFavorite: jest.fn(),
    removeFavorite: jest.fn(),
    favorites: [],
  }),
}));

const renderHomeComponent = () => {
  return render(
      <ThemeProvider theme={mockTheme}>
        <Home navigation={mockNavigation} />
      </ThemeProvider>
  );
};

describe('Home Component', () => {
  it('should render a snapshot with data', () => {
    const { toJSON } = renderHomeComponent();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should navigate when Item press', () => {
    const { getByText } = renderHomeComponent();
    fireEvent.press(getByText('Bitcoin'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Detail', {
      item: currenciesData[0],
    });
  });
});
