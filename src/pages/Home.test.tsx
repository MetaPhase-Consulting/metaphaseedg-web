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

  it('renders the Our Solutions heading', () => {
    renderWithRouter();
    expect(screen.getByText('Our Solutions')).toBeInTheDocument();
  });

  it('renders all service cards', () => {
    renderWithRouter();
    expect(screen.getByText('Advisory Solutions')).toBeInTheDocument();
    expect(screen.getByText('Digital Platform Modernization')).toBeInTheDocument();
    expect(screen.getByText('Data Analytics')).toBeInTheDocument();
    expect(screen.getByText('Cloud Engineering')).toBeInTheDocument();
    expect(screen.getByText('Cybersecurity')).toBeInTheDocument();
    expect(screen.getByText('Experience Design')).toBeInTheDocument();
  });

  it('renders the CTA section', () => {
    renderWithRouter();
    expect(screen.getByText('Ready to Transform Your Mission?')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact us/i })).toHaveAttribute('href', '/contact');
  });

  it('renders the JV illustration', () => {
    renderWithRouter();
    expect(screen.getByAltText('MetaPhase EDG Joint Venture Illustration')).toBeInTheDocument();
  });
});
