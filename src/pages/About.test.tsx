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

  it('renders current team members', () => {
    renderWithRouter();
    expect(screen.getByText('Sophia Edwards')).toBeInTheDocument();
    expect(screen.getByText('Fred Costa')).toBeInTheDocument();
  });

  it('no longer lists Brett Mclaren', () => {
    renderWithRouter();
    expect(screen.queryByText('Brett Mclaren')).not.toBeInTheDocument();
  });

  it('renders team member photos with descriptive alt text', () => {
    renderWithRouter();
    expect(screen.getByAltText(/Sophia Edwards/)).toBeInTheDocument();
    expect(screen.getByAltText(/Fred Costa/)).toBeInTheDocument();
  });

  it('renders certification statement', () => {
    renderWithRouter();
    expect(
      screen.getByText(/MetaPhase EDG is an SBA certified 8\(a\)/i)
    ).toBeInTheDocument();
  });

  it('renders company descriptions', () => {
    renderWithRouter();
    expect(screen.getByRole('heading', { name: 'MetaPhase', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'SharpEDG', level: 3 })).toBeInTheDocument();
  });

  it('no longer says "MetaPhase Consulting"', () => {
    renderWithRouter();
    expect(screen.queryByText(/MetaPhase Consulting/)).not.toBeInTheDocument();
  });

  it('renders Learn More links', () => {
    renderWithRouter();
    const learnMoreLinks = screen.getAllByText('Learn More');
    expect(learnMoreLinks).toHaveLength(2);
  });

  it('renders company logos', () => {
    renderWithRouter();
    expect(screen.getByAltText('MetaPhase logo')).toBeInTheDocument();
    expect(screen.getByAltText('SharpEDG logo')).toBeInTheDocument();
  });
});
