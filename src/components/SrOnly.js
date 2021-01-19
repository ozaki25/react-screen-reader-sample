import React from 'react';

function SrOnly({ text }) {
  return (
    <div
      aria-atomic="true"
      aria-live="assertive"
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: '0',
      }}
    >
      {text}
    </div>
  );
}

export default SrOnly;
