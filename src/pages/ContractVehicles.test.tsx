import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import ContractVehicles from './ContractVehicles';

function renderWithRouter() {
  return render(
    <BrowserRouter>
      <ContractVehicles />
    </BrowserRouter>
  );
}

describe('ContractVehicles', () => {
  it('renders the page heading', () => {
    renderWithRouter();
    expect(screen.getByRole('heading', { name: 'Contract Vehicles', level: 1 })).toBeInTheDocument();
  });

  it('lists the GSA Schedule contract number and SINs', () => {
    renderWithRouter();
    expect(screen.getByText('47QTCA26D002G')).toBeInTheDocument();
    expect(screen.getByText('541611, 54151S')).toBeInTheDocument();
    expect(screen.getByText('12/18/2025 – 12/17/2030')).toBeInTheDocument();
  });

  it('lists the NASA SEWP VI contract number and ordering period', () => {
    renderWithRouter();
    expect(
      screen.getByRole('heading', {
        name: 'NASA Solutions for Enterprise-Wide Procurement (SEWP) VI',
        level: 3,
      })
    ).toBeInTheDocument();
    expect(screen.getByText('80TECH26D1903')).toBeInTheDocument();
    expect(screen.getByText('11/01/2026 – 10/31/2036')).toBeInTheDocument();
  });

  it('mentions SBIR pathway and TS facility clearance', () => {
    renderWithRouter();
    expect(screen.getByText('MetaPhase SBIR Phase III')).toBeInTheDocument();
    expect(screen.getByText('Top Secret Facility Clearance')).toBeInTheDocument();
  });

  it('shows set-aside designations', () => {
    renderWithRouter();
    expect(screen.getByText('SBA 8(a)')).toBeInTheDocument();
    expect(screen.getByText('EDWOSB')).toBeInTheDocument();
    expect(screen.getByText('WOSB')).toBeInTheDocument();
  });

  it('links to the contact page', () => {
    renderWithRouter();
    expect(screen.getByRole('link', { name: /contact us/i })).toHaveAttribute('href', '/contact');
  });
});
