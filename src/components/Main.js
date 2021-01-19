import React, { useState } from 'react';
import { getItems } from '../api/qiita';

function Main() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    setLoading(true);
    setItems(await getItems());
    setLoading(false);
  };

  return (
    <main>
      <h1>Hello React Sample</h1>
      <button onClick={onClick}>Get Items</button>
      {loading && <p>...Loading</p>}
      {items?.length && (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Main;
