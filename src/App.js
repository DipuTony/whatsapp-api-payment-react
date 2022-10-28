import './App.css';
import PaymentIndex from './Components/Payment/PaymentIndex';

import { BrowserRouter as Router, Routes, Route, Link, Outlet, } from "react-router-dom";
import WhatsAppIndex from './Pages/WhatsAppIndex';
import Header from './Components/Header';
import AdminIndex from './Pages/Admin/AdminIndex';

function App() {
  return (
    <>
      <Router>
    <Header/>

        <Routes>
          <Route path="/" element={<WhatsAppIndex />} />
          <Route path="/payment" element={<PaymentIndex />} />
          <Route path="/admin" element={<AdminIndex />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
