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

  it('renders the subtitle', () => {
    renderWithRouter();
    expect(screen.getByText('Government Solutions Reimagined')).toBeInTheDocument();
  });

  it('renders the Meet The Team section', () => {
    renderWithRouter();
    expect(screen.getByText('Meet The Team')).toBeInTheDocument();
  });

  it('renders team members', () => {
    renderWithRouter();
    expect(screen.getByText('Sophia Edwards')).toBeInTheDocument();
    expect(screen.getByText('Fred Costa')).toBeInTheDocument();
    expect(screen.getByText('Brett Mclaren')).toBeInTheDocument();
  });

  it('renders team member photos', () => {
    renderWithRouter();
    expect(screen.getByAltText('Sophia Edwards')).toBeInTheDocument();
    expect(screen.getByAltText('Fred Costa')).toBeInTheDocument();
    expect(screen.getByAltText('Brett Mclaren')).toBeInTheDocument();
  });

  it('renders certification statement', () => {
    renderWithRouter();
    expect(
      screen.getByText(/MetaPhase EDG is an SBA certified 8\(a\)/i)
    ).toBeInTheDocument();
  });

  it('renders company descriptions', () => {
    renderWithRouter();
    expect(screen.getByText('MetaPhase Consulting')).toBeInTheDocument();
    expect(screen.getByText('SharpEDG')).toBeInTheDocument();
  });

  it('renders Learn More links', () => {
    renderWithRouter();
    const learnMoreLinks = screen.getAllByText('Learn More');
    expect(learnMoreLinks).toHaveLength(2);
  });

  it('renders company logos', () => {
    renderWithRouter();
    expect(screen.getByAltText('MetaPhase Consulting logo')).toBeInTheDocument();
    expect(screen.getByAltText('SharpEDG logo')).toBeInTheDocument();
  });
});
