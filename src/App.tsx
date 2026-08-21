import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { BookingSection } from './components/BookingSection';
import { ContactWhatsAppCall } from './components/ContactWhatsAppCall';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { GoogleAuthModal } from './components/GoogleAuthModal';
import { PriceEstimatorModal } from './components/PriceEstimatorModal';
import { UserProfile } from './types';

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('foodbazar_auth_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isEstimatorModalOpen, setIsEstimatorModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleLoginSuccess = (profile: UserProfile) => {
    setUser(profile);
    localStorage.setItem('foodbazar_auth_user', JSON.stringify(profile));
    showToast(`Welcome, ${profile.name}! Signed in via Google.`);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('foodbazar_auth_user');
    showToast('Signed out successfully.');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2926] font-sans antialiased selection:bg-[#C5A059] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#2D2926] border border-[#C5A059] text-white px-5 py-3 rounded-full shadow-2xl text-xs sm:text-sm font-semibold flex items-center space-x-2 animate-in fade-in slide-in-from-top-4">
          <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        user={user}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
        onOpenEstimator={() => setIsEstimatorModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenEstimator={() => setIsEstimatorModalOpen(true)} />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <BookingSection />
        <ContactWhatsAppCall />
        <ReviewsSection
          user={user}
          onOpenAuth={() => setIsAuthModalOpen(true)}
        />
        <FaqSection />
      </main>

      {/* Footer & Mobile Quick Actions */}
      <Footer />

      {/* Modals */}
      <GoogleAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleLoginSuccess}
      />

      <PriceEstimatorModal
        isOpen={isEstimatorModalOpen}
        onClose={() => setIsEstimatorModalOpen(false)}
      />
    </div>
  );
}
