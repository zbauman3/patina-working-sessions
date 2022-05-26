import { renderPatina } from '../utils/renderPatina';
import { fireEvent } from '@testing-library/react';

import Home from './index'

describe('ExamplePage', () => {
  it('renders correctly', () => {
    const { getByRole } = renderPatina(<Home />)
    const heading = getByRole('heading');
    expect(heading.textContent).toMatch(/hello, patina/i);
  })
  it('renders correctly', () => {
    const { getByRole } = renderPatina(<Home />)
    const button = getByRole('button', { name: 'Increment' });
    const count = getByRole('status');
    expect(count.textContent).toMatch(/count: 0/i);
    fireEvent.click(button)
    expect(count.textContent).toMatch(/count: 1/i);
  })
})