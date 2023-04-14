import React, { useState } from 'react';
import './TextCollapse.css'

function TextCollapse({ text, maxLength }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const words = text.split(' ');
  const truncatedWords = isCollapsed ? words.slice(0, maxLength) : words;

  return (
    <div className='pb-2'>
      <p className='pt-2'>{truncatedWords.join(' ')}</p>
      {words.length > maxLength && (
        <a onClick={toggleCollapse} className='collapse-btn'>
          {isCollapsed ? 'Read More' : 'Read Less'}
        </a>
      )}
    </div>
  );
}

export default TextCollapse;