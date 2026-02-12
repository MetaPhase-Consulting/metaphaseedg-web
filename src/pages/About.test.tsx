import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import About from './About';

function renderWithRouter() {
  return render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
}

describe('About', () => {
  it('renders the About Us heading', () => {
    renderWithRouter();
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  it('renders company description', () => {
    renderWithRouter();
    expect(
      screen.getByText(/MetaPhase EDG is an SBA certified 8\(a\)/i)
    ).toBeInTheDocument();
  });

  it('renders certifications', () => {
    renderWithRouter();
    expect(screen.getByText('SBA 8(a)')).toBeInTheDocument();
    expect(screen.getByText('EDWOSB')).toBeInTheDocument();
    expect(screen.getByText('WOSB')).toBeInTheDocument();
  });

  it('renders capabilities', () => {
    renderWithRouter();
    expect(screen.getByText('IT Modernization')).toBeInTheDocument();
    expect(screen.getByText('Cybersecurity')).toBeInTheDocument();
    expect(screen.getByText('Cloud Engineering')).toBeInTheDocument();
  });
});
