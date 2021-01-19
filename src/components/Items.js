import React from 'react';

function Items({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Items;
