import { useState, useEffect } from 'react';

const SiteLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentText, setCurrentText] = useState('');
  const [wipeUp, setWipeUp] = useState(false);

  const fullText = "Aditya Kumar Mishra";

  useEffect(() => {
    // Typewriter effect
    let charIndex = 0;
    const typeWriter = setInterval(() => {
      if (charIndex < fullText.length) {
        setCurrentText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeWriter);
        // Start wipe up after typing completes
        setTimeout(() => setWipeUp(true), 1000);
        // Hide loader after wipe animation
        setTimeout(() => setIsLoading(false), 2000);
      }
    }, 150);

    return () => {
      clearInterval(typeWriter);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-primary overflow-hidden transition-transform duration-1000 ${
      wipeUp ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        {/* Typewriter Text */}
        <div className="text-center">
          <h1 className="text-white text-4xl sm:text-6xl font-bold mb-4 min-h-[60px] sm:min-h-[80px] flex items-center justify-center">
            {currentText}
            <span className="animate-pulse text-secondary">|</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SiteLoader;
