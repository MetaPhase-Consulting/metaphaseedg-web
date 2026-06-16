import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ContractVehicles from './pages/ContractVehicles';
import Contact from './pages/Contact';
import BookOnline from './pages/BookOnline';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contract-vehicles" element={<ContractVehicles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-online" element={<BookOnline />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
