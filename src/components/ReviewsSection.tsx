import React, { useState } from 'react';
import { INITIAL_REVIEWS } from '../data/cateringData';
import { Review, UserProfile } from '../types';
import { Star, ShieldCheck, Sparkles, PlusCircle, MessageSquare, ThumbsUp, CheckCircle, User } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReviewsSectionProps {
  user: UserProfile | null;
  onOpenAuth: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ user, onOpenAuth }) => {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('foodbazar_user_reviews');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return [...parsed, ...INITIAL_REVIEWS];
      } catch (e) {
        return INITIAL_REVIEWS;
      }
    }
    return INITIAL_REVIEWS;
  });

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [newAuthor, setNewAuthor] = useState(user ? user.name : '');
  const [newEventType, setNewEventType] = useState('Wedding Reception (500 Guests)');
  const [newComment, setNewComment] = useState('');
  const [newLocation, setNewLocation] = useState('Kolkata');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newRev: Review = {
      id: 'rev-' + Date.now(),
      author: newAuthor || (user ? user.name : 'Verified Client'),
      avatar: user ? user.picture : undefined,
      rating: newRating,
      date: 'Just Now',
      eventType: newEventType,
      comment: newComment,
      location: newLocation,
      verified: true
    };

    const updated = [newRev, ...reviews];
    setReviews(updated);

    // Save user's submitted review in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('foodbazar_user_reviews') || '[]');
      localStorage.setItem('foodbazar_user_reviews', JSON.stringify([newRev, ...existing]));
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {}

    setSubmittedFeedback(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setSubmittedFeedback(false);
      setNewComment('');
    }, 2000);
  };

  const averageRating = (
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section id="reviews" className="py-24 bg-[#FDFBF7] text-[#2D2926] relative border-b border-[#EAE7E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14 border-b border-[#EAE7E1] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 border-b border-[#C5A059] pb-1 mb-3">
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
                Client Voices & Endorsements
              </span>
            </div>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2D2926]">
              Testimonials & <span className="italic text-[#C5A059] font-normal">Patron Reviews</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5E574F] mt-3 max-w-xl leading-relaxed">
              Hear directly from families, newlyweds, and event organizers who trusted Food Bazar Caterer for their most memorable occasions.
            </p>
          </div>

          {/* Aggregate Rating & Action Box */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white border border-[#EAE7E1] p-4 sm:p-5 rounded-xs shadow-xs">
            <div className="text-center sm:text-left pr-0 sm:pr-4 sm:border-r border-gray-200">
              <div className="flex items-center justify-center sm:justify-start space-x-1 text-[#C5A059] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                ))}
              </div>
              <div className="serif text-xl font-bold text-[#2D2926]">
                {averageRating} / 5.0 Rating
              </div>
              <div className="text-[10px] uppercase tracking-wider text-[#7C7368]">Based on {reviews.length}+ Verified Feasts</div>
            </div>

            <div className="flex flex-col space-y-2 w-full sm:w-auto">
              <button
                id="btn-open-write-review"
                onClick={() => {
                  if (!user) {
                    onOpenAuth();
                  } else {
                    setNewAuthor(user.name);
                    setShowReviewModal(true);
                  }
                }}
                className="bg-[#2D2926] hover:bg-[#C5A059] text-white font-bold text-[11px] uppercase tracking-[0.2em] px-5 py-3 rounded-full transition shadow-xs flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{user ? 'Write a Review' : 'Sign-In to Review'}</span>
              </button>

              {!user && (
                <button
                  onClick={() => setShowReviewModal(true)}
                  className="text-[10px] uppercase tracking-wider text-[#5E574F] hover:text-[#2D2926] underline text-center cursor-pointer"
                >
                  Or submit review as Guest
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#EAE7E1] hover:border-[#C5A059] rounded-xs p-6 shadow-xs transition flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1 text-[#C5A059]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>

                  {rev.verified && (
                    <span className="flex items-center text-[9px] uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                      <ShieldCheck className="w-3 h-3 mr-1 text-emerald-600" />
                      Verified Host
                    </span>
                  )}
                </div>

                {/* Event Type & Date */}
                <div className="text-[10px] uppercase tracking-wider font-bold text-[#C5A059] mb-1">
                  {rev.eventType}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#5E574F] leading-relaxed italic mb-4 font-normal">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-3 border-t border-gray-100 flex items-center space-x-3">
                {rev.avatar ? (
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-8 h-8 rounded-full border border-gray-200"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#FDFBF7] border border-gray-200 flex items-center justify-center text-[#2D2926] font-bold text-xs">
                    {rev.author.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="serif text-xs font-bold text-[#2D2926]">{rev.author}</div>
                  <div className="text-[10px] text-[#7C7368]">{rev.location} • {rev.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Modal Form */}
        {showReviewModal && (
          <div className="fixed inset-0 z-50 bg-[#2D2926]/90 flex items-center justify-center p-4 backdrop-blur-xs">
            <div className="bg-white border border-[#C5A059] rounded-xs p-6 sm:p-8 max-w-lg w-full text-[#2D2926] shadow-2xl relative">
              <h3 className="serif text-xl sm:text-2xl font-light text-[#2D2926] mb-1">
                Share Your Food Bazar Experience
              </h3>
              <p className="text-xs text-[#5E574F] mb-4">
                Your feedback inspires our master chefs and helps future wedding hosts plan with confidence.
              </p>

              {submittedFeedback ? (
                <div className="text-center py-6">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="serif text-lg font-normal text-[#2D2926]">Review Published!</h4>
                  <p className="text-xs text-[#5E574F] mt-1">Thank you for your valuable words.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  {/* Rating Stars picker */}
                  <div>
                    <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1">
                      Your Overall Rating *
                    </label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="p-1 hover:scale-110 transition cursor-pointer"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= newRating
                                ? 'fill-[#C5A059] text-[#C5A059]'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-[#C5A059] ml-2">
                        {newRating} / 5 Stars
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        placeholder="e.g. Anirban Sen"
                        className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-3 py-2 text-xs text-[#2D2926] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                        placeholder="e.g. Salt Lake, Kolkata"
                        className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-3 py-2 text-xs text-[#2D2926] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1">
                      Event Type & Guest Count
                    </label>
                    <input
                      type="text"
                      value={newEventType}
                      onChange={(e) => setNewEventType(e.target.value)}
                      placeholder="e.g. Wedding Reception (600 Guests)"
                      className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-3 py-2 text-xs text-[#2D2926] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#7C7368] uppercase tracking-wider mb-1">
                      Your Review / Favorite Dishes *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Describe the taste of Mutton Biryani, Chingri Malai Curry, hospitality, staff presentation..."
                      className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xs px-3 py-2 text-xs text-[#2D2926] placeholder-gray-400 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div className="flex items-center justify-end space-x-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowReviewModal(false)}
                      className="px-4 py-2 text-xs font-semibold text-[#7C7368] hover:text-[#2D2926] cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#2D2926] hover:bg-[#C5A059] text-white font-bold text-[11px] uppercase tracking-wider px-6 py-2.5 rounded-full transition cursor-pointer"
                    >
                      Post Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
