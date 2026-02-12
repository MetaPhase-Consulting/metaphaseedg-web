import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Header from './Header';

function renderWithRouter() {
  return render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

describe('Header', () => {
  it('renders the MetaPhase EDG logo text', () => {
    renderWithRouter();
    expect(screen.getByText('MetaPhase EDG')).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    renderWithRouter();
    expect(screen.getByText('Problem Solvers for a Digital World')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithRouter();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    renderWithRouter();
    expect(screen.getByAltText('MetaPhase EDG logo')).toBeInTheDocument();
  });

  it('has correct navigation link targets', () => {
    renderWithRouter();
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /about us/i })).toHaveAttribute('href', '/about-us');
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact');
  });
});
