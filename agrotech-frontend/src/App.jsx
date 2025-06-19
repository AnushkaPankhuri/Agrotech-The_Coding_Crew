import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage.jsx';
import LoginForm from './components/LoginForm.jsx';
import FarmerRegisterForm from './components/FarmerRegisterForm.js';
import MiddlemanRegisterForm from './components/MiddlemanRegisterForm.js';
import FarmerDashboard from './components/FarmerDashboard.jsx';
import MiddlemanDashboard from './components/MiddlemanDashboard.jsx';
import Navbar from './components/Navbar.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Profile from './components/Profile.jsx';
import PurchaseRequestForm from "./components/PurchaseRequestForm.js";
import MiddlemanRequestsPage from "./components/MiddlemanRequestsPage.js";
import FarmerTransactionPage from "./components/FarmerTransactionPage.jsx";
import MiddlemanTransactionPage from "./components/MiddlemanTransactionPage.jsx";
import Home from "./components/Home.jsx";
import MarketData from "./components/MarketData.jsx";
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/navigation/Footer.jsx';
import Demographics from './pages/Demographics.jsx';
import NotFound from './pages/NotFound.jsx';


function App() {
    return (
        <>
        <AuthProvider>
            <Router>
                <div className="app-container">
                <Navbar/>
                <main className="content-area">
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register/farmer" element={<FarmerRegisterForm />} />
                    <Route path="/register/middleman" element={<MiddlemanRegisterForm />} />
                    <Route
                        path="/farmer"
                        element={
                            <ProtectedRoute role="FARMER">
                                <FarmerDashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/middleman"
                        element={
                            <ProtectedRoute role="MIDDLEMAN">
                                <MiddlemanDashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path="/purchase" element={<ProtectedRoute><PurchaseRequestForm /></ProtectedRoute>} />
                    <Route path="/purchase/middleman" element={<ProtectedRoute><MiddlemanRequestsPage /></ProtectedRoute>} />
                    <Route path="/transactions" element={<ProtectedRoute><FarmerTransactionPage /></ProtectedRoute>} />
                    <Route path="/transactions/middleman" element={<ProtectedRoute><MiddlemanTransactionPage /></ProtectedRoute>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/market-data" element={<MarketData/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/demographics" element={<Demographics/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                </main>
                <Footer/>
                </div>
                <style>{`
          html, body, #root {
            height: 100%;
            margin: 0;
            padding: 0;
          }

          .app-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .content-area {
            flex-grow: 1;
          }
        `}</style>
            </Router>
        </AuthProvider>
        </>
    );
}

export default App;

