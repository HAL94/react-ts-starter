/**
 * 'describe': will set up a test suite which is a set of tests to run
 * 'it': is a test section
 * 'render'; Will allow us to render components
 * 'screen': will help us to inspect and check those components for testing
 */
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App, WrappedApp } from './App';

describe('App', () => {
  it('renders hello world', () => {
    // ARRANGE - set up your tests
    render(<WrappedApp />);
    // ACT - perform the test as if a user would do it

    // EXPECT - test the result
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });

  it('renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-not-exists']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
