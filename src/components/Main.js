import React, { useState } from 'react';
import Items from './Items';
import Loading from './Loading';
import SrOnly from './SrOnly';
import { getItems } from '../api/qiita';

function Main() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onClick = async () => {
    setLoading(true);
    setMessage('通信中です');
    const result = await getItems();
    setItems(result);
    setLoading(false);
    setMessage(`${result.length}件のデータを取得しました`);
  };

  return (
    <main>
      <h1>Hello React Sample</h1>
      <button onClick={onClick}>Get Items</button>
      {loading && <Loading />}
      {items?.length && <Items items={items} />}
      <SrOnly text={message} />
    </main>
  );
}

export default Main;
