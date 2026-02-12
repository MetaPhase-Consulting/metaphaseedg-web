import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Home from './Home';

function renderWithRouter() {
  return render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

describe('Home', () => {
  it('renders the company description', () => {
    renderWithRouter();
    expect(
      screen.getByText(/MetaPhase EDG is a solution integrator/i)
    ).toBeInTheDocument();
  });

  it('renders the three column headings', () => {
    renderWithRouter();
    expect(screen.getByText('Our Focus')).toBeInTheDocument();
    expect(screen.getByText('Our Leadership')).toBeInTheDocument();
    expect(screen.getByText('Our Solutions')).toBeInTheDocument();
  });

  it('renders the hero background image', () => {
    renderWithRouter();
    expect(screen.getByAltText('Team collaboration in a modern office')).toBeInTheDocument();
  });

  it('renders the three column images', () => {
    renderWithRouter();
    expect(screen.getByAltText('Consulting professionals')).toBeInTheDocument();
    expect(screen.getByAltText('Business leadership meeting')).toBeInTheDocument();
    expect(screen.getByAltText('Technology solutions')).toBeInTheDocument();
  });
});
