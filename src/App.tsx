import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WebDevelopment from './pages/services/WebDevelopment';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import AppDevelopment from './pages/services/AppDevelopment';
import PaidAdvertising from './pages/services/PaidAdvertising';
import CRMSolutions from './pages/services/CRMSolutions';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Layout from './components/layout/Layout';

// Admin Imports
import { AdminAuthProvider } from './context/AdminAuthContext';
import ProtectedRoute from './components/admin/auth/ProtectedRoute';
import AdminLayout from './components/admin/layout/AdminLayout';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import SiteSettings from './pages/admin/SiteSettings';
import Branding from './pages/admin/Branding';
import PagesManager from './pages/admin/PagesManager';
import ServicesManager from './pages/admin/ServicesManager';
import BlogManager from './pages/admin/BlogManager';
import SEOManager from './pages/admin/SEOManager';
import MediaLibrary from './pages/admin/MediaLibrary';
import NavigationManager from './pages/admin/NavigationManager';
import FooterManager from './pages/admin/FooterManager';
import ContactSettings from './pages/admin/ContactSettings';
import Profile from './pages/admin/Profile';

const App: React.FC = () => {
  return (
    <AdminAuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/services/social-media-management" element={<Layout><SocialMediaManagement /></Layout>} />
          <Route path="/services/web-development" element={<Layout><WebDevelopment /></Layout>} />
          <Route path="/services/app-development" element={<Layout><AppDevelopment /></Layout>} />
          <Route path="/services/paid-advertising" element={<Layout><PaidAdvertising /></Layout>} />
          <Route path="/services/crm-solutions" element={<Layout><CRMSolutions /></Layout>} />
          <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
          <Route path="/blogs/:slug" element={<Layout><BlogPost /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          
          <Route path="/admin/dashboard" element={<ProtectedRoute><AdminLayout><AdminDashboard /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/site-settings" element={<ProtectedRoute><AdminLayout><SiteSettings /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/branding" element={<ProtectedRoute><AdminLayout><Branding /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/pages" element={<ProtectedRoute><AdminLayout><PagesManager /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/services" element={<ProtectedRoute><AdminLayout><ServicesManager /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/blogs" element={<ProtectedRoute><AdminLayout><BlogManager /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/seo" element={<ProtectedRoute><AdminLayout><SEOManager /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/media" element={<ProtectedRoute><AdminLayout><MediaLibrary /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/navigation" element={<ProtectedRoute><AdminLayout><NavigationManager /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/footer" element={<ProtectedRoute><AdminLayout><FooterManager /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/contact-settings" element={<ProtectedRoute><AdminLayout><ContactSettings /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/profile" element={<ProtectedRoute><AdminLayout><Profile /></AdminLayout></ProtectedRoute>} />
        </Routes>
      </Router>
    </AdminAuthProvider>
  );
};

export default App;
