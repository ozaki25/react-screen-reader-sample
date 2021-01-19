import React, { ForwardedRef, forwardRef } from 'react';
import { ItemType } from '../interfaces';

type ItemsProps = {
  items: ItemType[];
};

function Items({ items }: ItemsProps, ref: ForwardedRef<HTMLUListElement>) {
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
