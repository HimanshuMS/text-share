import React, { useState, useEffect, useRef } from 'react';

const LineNumberTextarea: React.FC = () => {
  const [lineCount, setLineCount] = useState(1);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Function to calculate line numbers based on content
  const calculateLines = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      const lines = textarea.value.split('\n').length;
      setLineCount(lines);
    }
  };

  // Event listener for input updates
  const handleInput = () => {
    calculateLines();
  };

  // Update line count on resize (optional)
  useEffect(() => {
    window.addEventListener('resize', calculateLines);
    return () => window.removeEventListener('resize', calculateLines);
  }, []);

  return (
    <div className='flex flex-row relative w-full'>
      <div className="border border-r-2 select-none py-2 px-1">
        {Array.from({ length: lineCount }, (_, index) => (
          <div key={index} style={styles.lineNumber}>
            {index + 1}
          </div>
        ))}
      </div>
      <textarea
        ref={textareaRef}
        onInput={handleInput}
        className="w-full p-3 border-none resize-none outline-none"
        placeholder="Type here..."
      />
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    position: 'relative',
    fontFamily: 'monospace',
  },
  lineNumbers: {
    backgroundColor: '#f0f0f0',
    padding: '10px 5px',
    textAlign: 'right',
    userSelect: 'none',
    borderRight: '1px solid #ddd',
  },
  lineNumber: {
    height: '1.5em',
  },
  textarea: {
    width: '100%',
    border: 'none',
    padding: '10px',
    resize: 'none',
    outline: 'none',
    fontFamily: 'inherit',
    lineHeight: '1.5',
    fontSize: '1em',
  },
};

export default LineNumberTextarea;
