import { render } from '@testing-library/react';
import PokemonList from './PokemonList';

test('renders the pokemon speed', () => {
  const container = render(<PokemonList pokemon={['abra']} />);
  expect(container).toMatchSnapshot();
});
