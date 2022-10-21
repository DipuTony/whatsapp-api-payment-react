import './App.css';
import PaymentIndex from './Components/Payment/PaymentIndex';

import { BrowserRouter as Router, Routes, Route, Link, Outlet, } from "react-router-dom";
import WhatsAppIndex from './Pages/WhatsAppIndex';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Router>
    <Header/>

        <Routes>
          <Route path="/" element={<WhatsAppIndex />} />
          <Route path="/payment" element={<PaymentIndex />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
