import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

function renderWithRouter() {
  return render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
}

describe('Footer', () => {
  it('renders Company Information heading', () => {
    renderWithRouter();
    expect(screen.getByText('Company Information')).toBeInTheDocument();
  });

  it('renders company description', () => {
    renderWithRouter();
    expect(
      screen.getByText(/cutting-edge technology and management consulting/i)
    ).toBeInTheDocument();
  });

  it('renders contact email', () => {
    renderWithRouter();
    expect(screen.getByText('Info@MetaPhaseEDG.com')).toBeInTheDocument();
  });

  it('renders NAICS codes', () => {
    renderWithRouter();
    expect(screen.getByText('541611')).toBeInTheDocument();
    expect(screen.getByText('541519')).toBeInTheDocument();
    expect(screen.getByText('611420')).toBeInTheDocument();
  });

  it('renders address', () => {
    renderWithRouter();
    expect(screen.getByText('11911 Freedom Dr. Suite 1010 Reston, VA 20190')).toBeInTheDocument();
  });

  it('renders Privacy Policy link', () => {
    renderWithRouter();
    expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute(
      'href',
      '/privacy-policy'
    );
  });
});
