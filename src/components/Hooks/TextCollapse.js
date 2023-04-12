import React, { useState } from 'react';

function TextCollapse({ text, maxLength }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const words = text.split(' ');
  const truncatedWords = isCollapsed ? words.slice(0, maxLength) : words;

  return (
    <div>
      <p>{truncatedWords.join(' ')}</p>
      {words.length > maxLength && (
        <button onClick={toggleCollapse}>
          {isCollapsed ? 'Read More' : 'Read Less'}
        </button>
      )}
    </div>
  );
}

export default TextCollapse;