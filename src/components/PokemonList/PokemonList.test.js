import { render } from '@testing-library/react';
import PokemonList from './PokemonList';

test('renders the pokemon name', () => {
  const container = render(<PokemonList pokemon={['abra']} />);
  expect(container).toMatchSnapshot();
});
