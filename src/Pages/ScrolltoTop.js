import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div>
      {showButton && (
        <Fab
          color="secondary"
          size="medium"
          aria-label="scroll back to top"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 100,
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </div>
  );
};

export default ScrollToTopButton;
