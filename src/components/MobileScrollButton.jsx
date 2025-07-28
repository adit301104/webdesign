import { useState, useEffect } from 'react';

const MobileScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 md:hidden">
      <button
        onClick={scrollToNext}
        className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold shadow-lg"
      >
        ↓
      </button>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-stone-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default MobileScrollButton;