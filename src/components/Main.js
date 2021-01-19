import React, { useState, useEffect } from 'react';
import { getItems } from '../api/qiita';

function Main() {
  const [items, setItems] = useState(null);

  const fetchItems = async () => {
    setItems(await getItems());
  };

  useEffect(() => {
    console.log('Fetching');
    fetchItems();
  }, []);

  console.log({ items });

  return (
    <main>
      <h1>Hello React Sample</h1>
      {items ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>...Loading</p>
      )}
    </main>
  );
}

export default Main;
