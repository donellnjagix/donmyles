// components/DriverDashboard.tsx
"use client"
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Navbar, Nav } from 'react-bootstrap';
import LoadingActivities from './loadingactivities';
import DeliveryActivities from './DeliveryActivities';

const DriverDashboard: React.FC = () => {
  const [activePage, setActivePage] = useState<'loading' | 'delivery'>('loading'); // Default to loading activities page
  const router = useRouter();

  const handleNavClick = (page: 'loading' | 'delivery') => {
    setActivePage(page);
    router.push(`/dashboard/driver/${page}`);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Driver Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link active={activePage === 'loading'} onClick={() => handleNavClick('loading')}>
              Loading Activities
            </Nav.Link>
            <Nav.Link active={activePage === 'delivery'} onClick={() => handleNavClick('delivery')}>
              Delivery Activities
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {activePage === 'loading' && <LoadingActivities />}
      {activePage === 'delivery' && <DeliveryActivities />}
    </div>
  );
};

export default DriverDashboard;
