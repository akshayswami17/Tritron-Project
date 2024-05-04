import React, { useState, useEffect } from 'react';

function AnimatedHeading() {
  const [backgroundColor, setBackgroundColor] = useState('#f0f0f1');

  useEffect(() => {
    const colors = ['#f0f0f1', '#ffcccc', '#ccddff', '#ccb3ff', '#ffe0b3'];
    let currentIndex = 0;
  
    const interval = setInterval(() => {
      setBackgroundColor(colors[currentIndex]);
      currentIndex = (currentIndex + 1) % colors.length;
    }, 2000); // Adjust the interval as needed
  
    return () => clearInterval(interval); // Cleanup
  }, []);
  

  return (
    // <h1 style={{ backgroundColor, padding: '10px' }}>Welcome to Tritron</h1>
    <h1 style={{ backgroundColor, padding: '10px', color: '#3E2723' }}>Welcome to Tritron</h1>


  );
}

export default AnimatedHeading;
