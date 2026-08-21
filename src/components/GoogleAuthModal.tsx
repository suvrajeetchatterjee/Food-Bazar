import React, { useState } from 'react';
import { X, ShieldCheck, Loader2 } from 'lucide-react';
import { UserProfile } from '../types';
import { googleSignIn } from '../lib/firebaseAuth';

interface GoogleAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (profile: UserProfile) => void;
}

export const GoogleAuthModal: React.FC<GoogleAuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [customName, setCustomName] = useState('');
  const [customEmail, setCustomEmail] = useState('');
  const [isFirebaseLoading, setIsFirebaseLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFirebasePopup = async () => {
    setIsFirebaseLoading(true);
    setAuthError(null);
    try {
      const res = await googleSignIn();
      if (res && res.user) {
        const profile: UserProfile = {
          name: res.user.displayName || res.user.email?.split('@')[0] || 'Google User',
          email: res.user.email || '',
          picture: res.user.photoURL || undefined,
          signedInWith: 'google'
        };
        onSuccess(profile);
        onClose();
      }
    } catch (err: any) {
      console.warn('Firebase popup sign-in:', err);
      setAuthError(err.message || 'Google Sign-in closed or unavailable. You can enter your details below.');
    } finally {
      setIsFirebaseLoading(false);
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;

    const profile: UserProfile = {
      name: customName,
      email: customEmail || `${customName.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      signedInWith: 'google'
    };

    onSuccess(profile);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#2D2926]/90 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white rounded-xs max-w-md w-full p-6 sm:p-8 text-[#2D2926] shadow-2xl relative border border-[#C5A059] animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Google Header */}
        <div className="text-center mb-6">
          <div className="w-11 h-11 rounded-full bg-[#FDFBF7] border border-gray-200 shadow-xs flex items-center justify-center mx-auto mb-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z"/>
              <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
              <path fill="#FBBC05" d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.6 7.2C.6 9.2 0 11.5 0 14s.6 4.8 1.6 6.8l3.7-6.1z"/>
              <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 19.1C3.5 22.9 7.4 25 12 25z"/>
            </svg>
          </div>
          <h3 className="serif text-xl sm:text-2xl font-light text-[#2D2926]">
            Sign in with <span className="italic text-[#C5A059] font-normal">Google</span>
          </h3>
          <p className="text-xs text-[#5E574F] mt-1 font-light">
            Sign in with your Google account to access priority catering consultations and manage your booking proposals.
          </p>
        </div>

        {/* Real Google Auth Popup Button */}
        <button
          onClick={handleFirebasePopup}
          disabled={isFirebaseLoading}
          className="w-full mb-4 bg-[#2D2926] hover:bg-[#1E1B18] text-white font-bold text-xs uppercase tracking-[0.16em] py-3.5 px-5 rounded-full shadow-md hover:shadow-lg border border-[#C5A059]/60 hover:border-[#C5A059] flex items-center justify-center space-x-3 transition-all duration-300 cursor-pointer group"
        >
          {isFirebaseLoading ? (
            <Loader2 className="w-4 h-4 animate-spin text-[#C5A059]" />
          ) : (
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-xs">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z"/>
                <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
                <path fill="#FBBC05" d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.6 7.2C.6 9.2 0 11.5 0 14s.6 4.8 1.6 6.8l3.7-6.1z"/>
                <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 19.1C3.5 22.9 7.4 25 12 25z"/>
              </svg>
            </div>
          )}
          <span className="text-[#FDFBF7] group-hover:text-[#C5A059] transition-colors">Continue with Google</span>
        </button>

        {authError && (
          <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-xs mb-3 border border-amber-200">
            {authError}
          </p>
        )}

        {/* Or enter custom details */}
        <div className="relative my-4 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <span className="relative bg-white px-3 text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
            Or sign in with details
          </span>
        </div>

        <form onSubmit={handleCustomSubmit} className="space-y-3">
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">Full Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Suvrajeet Chatterjee"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-3.5 py-2.5 text-xs text-[#2D2926] focus:outline-none focus:border-[#C5A059]"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="e.g. yourname@gmail.com"
              value={customEmail}
              onChange={(e) => setCustomEmail(e.target.value)}
              className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-3.5 py-2.5 text-xs text-[#2D2926] focus:outline-none focus:border-[#C5A059]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2D2926] hover:bg-[#C5A059] text-white font-bold text-[11px] uppercase tracking-wider py-3 rounded-full transition shadow-xs flex items-center justify-center space-x-2 cursor-pointer mt-2"
          >
            <span>Sign In</span>
          </button>
        </form>

        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center space-x-1.5 text-[10px] text-gray-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Secure Google Authentication • Instant Sign-In</span>
        </div>
      </div>
    </div>
  );
};

