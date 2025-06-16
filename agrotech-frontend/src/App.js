import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import LoginForm from './components/LoginForm';
import FarmerRegisterForm from './components/FarmerRegisterForm';
import MiddlemanRegisterForm from './components/MiddlemanRegisterForm';
import FarmerDashboard from './components/FarmerDashboard';
import MiddlemanDashboard from './components/MiddlemanDashboard';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Profile from './components/Profile';
import PurchaseRequestForm from "./components/PurchaseRequestForm";
import MiddlemanRequestsPage from "./components/MiddlemanRequestsPage";
import FarmerTransactionPage from "./components/FarmerTransactionPage";
import MiddlemanTransactionPage from "./components/MiddlemanTransactionPage";
import Home from "./components/Home";
import MarketData from "./components/MarketData";
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

