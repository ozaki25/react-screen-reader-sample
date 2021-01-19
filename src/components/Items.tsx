import React, { forwardRef } from 'react';

function Items({ items }, ref) {
  return (
    <ul ref={ref} tabIndex={-1} style={{ outline: 'none' }}>
      {items.map(item => (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default forwardRef(Items);
