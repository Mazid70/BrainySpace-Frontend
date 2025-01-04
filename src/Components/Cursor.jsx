import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
const Cursor = () => {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={5}
        outerSize={50}
        innerScale={1}
        outerScale={1}
        outerAlpha={0}
        hasBlendMode={true}
        showSystemCursor={true}
        innerStyle={{
          backgroundColor: '#ffff',
        }}
        outerStyle={{
          border: '1.5px solid #994CC9',
        }}
      />
    </div>
  );
};

export default Cursor;