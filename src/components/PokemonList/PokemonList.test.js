import { render } from '@testing-library/react';
import PokemonList from './PokemonList';

test.skip('renders the pokemon speed', () => {
  const container = render(<PokemonList />);
  expect(container).toMatchSnapshot();
});
